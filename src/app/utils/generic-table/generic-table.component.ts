import { AfterViewChecked, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { API } from '../requests/api';
import { DTColumn, DTFilterField } from './format/interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent implements OnInit, AfterViewChecked {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  @Input()
  /** Columnas de la tabla */
  columns: DTColumn[] = [];

  @Input()
  /* Campos a filtrar */
  filterFields?: DTFilterField[] = [];
  
  /** Elementos de la tabla */
  items: any[] = [];

  @Input()
  /** Formato del paginador */
  paginatorOptions: any = { pageSizeOptions: [], length: 0 };

  @Input()
  /** Atributo que se usa para mostrar o no el paginador */
  is_paged: boolean = true;

  @Input()
  /** API desde la cual se consultan los elemento */
  service: any | API<any> = null;
  
  @Input()
  /** Arreglo desde el cual se mostrarán los elemento */
  data: any = [];

  @Input()
  /** Método de la API que se usa para la consulta */
  serviceMethod = 'ajax';

  @Input()
  /** Método de la API que se usa para la consulta */
  serviceMethodParams = {};
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  dataSource: any = new MatTableDataSource([]);
  cargando = true;

  constructor() { }

  ngOnInit() { }

  ngAfterViewChecked() {
    this.columns.forEach((currentColum: DTColumn) => {
      if ('attribute' in currentColum && !('template' in currentColum)) {
        if (!('dataAttribute' in currentColum)) {
          this.filterFields.push({
            value: currentColum.attribute,
            description: currentColum.header
          });
        } else {
          this.filterFields.push({
            value: currentColum.dataAttribute,
            description: currentColum.header
          })
        }

      }
    });
  }

  refresh(valueFilter?: string) {
    this.cargando = true;
    if (this.service) {
      this.service[this.serviceMethod](this.serviceMethodParams).subscribe((data: any) => {
        this.data = data;
        this.setSource(data);
      });
    } else {
      this.setSource(this.data);
    }
  }

  setSource(data: any) {
    if (data.results) {
      this.items = [...data.results];
      this.paginatorOptions.length = data.count;
      this.dataSource = new MatTableDataSource([...data.results]);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.cargando = false;
    } else {
      if (this.is_paged) this.paginatorOptions.length = data.length;
      this.items = [...data];
      this.dataSource = new MatTableDataSource([...data]);
      this.dataSource.sort = this.sort;
      if (this.is_paged) this.dataSource.paginator = this.paginator;
      this.cargando = false;
    }
  }

}
