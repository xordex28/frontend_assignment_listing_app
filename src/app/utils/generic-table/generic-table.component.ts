import { AfterViewChecked, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { API } from '../../utils/requests/api';
import * as _ from 'lodash';
import { CheckChangeEvent, DTColumn, DTCSVConfig, DTFilter, DTFilterField, DTFilters } from './format/interface';
import { MatSort } from '@angular/material/sort';
import { GlobalService } from '../services/global.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import * as $ from "jquery";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { ModalService } from '../services/modal.service';
import { BulkloadComponent } from '../bulkload/bulkload.component';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: [
    './generic-table.component.scss',
    './styles/listing.page.scss',
    './styles/listing.ios.scss',
    './styles/listing.shell.scss'
  ],
})
export class GenericTableComponent implements OnInit, AfterViewChecked {

  @Input()
  /* Campos a filtrar */
  filterFields?: DTFilterField[] = [];


  @Input()
  /** Columnas de la tabla */
  columns: DTColumn[] = [];

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

  @Output()
  /* Evento que se ejecuta se le da en agregar */
  addChange = new EventEmitter();

  @Input()
  /** Mostrar boton para agregar */
  btnAdd?: boolean = true;

  @Output()
  /* Evento que se ejecuta se le da en Modificar */
  updateChange = new EventEmitter();

  @Input()
  /** Mostrar boton para Modificar */
  btnUpdate?: boolean = true;

  @Output()
  /* Evento que se ejecuta se le da en Modificar */
  deleteChange = new EventEmitter();

  @Input()
  /** Mostrar boton para Modificar */
  btnDelete?: boolean = true;

  @Input()
  /** Agregar columna de checkbox en la tabla */
  checkBoxColumn?: boolean;

  @Input()
  /** Class para la filas */
  showCheck!: (item: any) => boolean;

  @Input()
  /** Atributo unico que se utiliza para distinguir items */
  checkColumnAttribute = 'id';

  @Input()
  /** Atributo que se usa para mostrar o no el paginador */
  is_paged: boolean = true;

  @Input()
  /** Formato del paginador */
  paginatorOptions: any = { pageSizeOptions: [], length: 0 };

  @Input()
  /** Dirección en la que se ordena la tabla, por defecto descendente */
  orderDir = 'desc';

  @Input()
  /** Texto por defecto en columnas vacías */
  textDefault = 'N/A';

  @Input()
  /** Clave del diccionario de plantillas de donde se extrae el template para el diseño movil de la fila */
  templateMovilDesign: { template: string } = { template: '' };

  @Input()
  /** Diccionario de plantillas personalizadas para las columnas */
  templates: any = {};
  
  @Input()
  hideMobileDesignGeneric = false
  /** Hace que se oculte el diseño movil y se muestre la tabla en horizontal */

  @Input()
  /** Mensaje a mostrar cuando no exista data en la Tabla */

  messageNoData: string = 'No Data';

  @Output()
  checkedItemsChange = new EventEmitter();

  /** Elementos de la tabla */
  items: any[] = [];

  cargando: boolean = false;

  dataSource: any = new MatTableDataSource([]);

  checkedItemsValue: any[] = [];

  checkBoxValue: any = {};
  checkAllValue: boolean = false;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private globalService: GlobalService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: ModalService,
    private toasService: ToastService
  ) { }

  @Input()
  get checkedItems() {
    return this.checkedItemsValue;
  }

  async ngOnInit() {
    console.log(this.data);
    this.refresh();
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    if (this.filterFields.length <= 0) {
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
  }

  getColumnsTitle() {
    return this.columns.filter((column: DTColumn) => column.title === true);
  }

  ///////////////////////////////////////////////////////////////////////////////

  /** obtiene el valor de objeto.atributo con soporte para atributos anidados */
  getRealValue(obj: any, attribute: string, useShortUUID = false) {
    let value = _.get(obj, attribute);

    if (useShortUUID && value) {
      value = value.slice(0, 5);
    }
    return value;
  }

  parseColumns(columns: DTColumn[]) {
    return columns.map((c) => c.dataAttribute || c.attribute);
  }

  /** Funcion para las columnas bool */
  siNo(data: number | boolean) {
    return data === 1 || data === true ? 'SI' : 'NO';
  }

  refresh(params?: {}, event?:any) {
    this.cargando = true;
    if (this.service) {
      if (params) {
        this.service[this.serviceMethod](params).subscribe((data: any) => {
          this.data = data;
          this.setSource(data);
          event.target.complete();
        });
      } else {
        this.service[this.serviceMethod](this.serviceMethodParams).subscribe((data: any) => {
          this.data = data;
          this.setSource(data);
        });
      }
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
      console.log(this.dataSource);
    }
  }

  checkAll($event: any) {
    const value = $event;
    for (const item of this.items) {
      const flat = this.showCheck ? this.showCheck(item) : true;
      if (flat) {
        this.checkBoxValue[this.getRealValue(item, this.checkColumnAttribute)] = value;
      }
    }
    // Filtro para omitir los check que no se deben de ver definidos por showCheck
    this.updateCheckedItems({
      value,
      items: this.items.filter((val: any) => this.checkBoxValue[val[this.checkColumnAttribute]])
    });
  }

  updateCheckedItems($event: CheckChangeEvent) {
    for (const item of $event.items) {
      const itemValue = this.getRealValue(item, this.checkColumnAttribute);
      if ($event.value) {
        if (!this.checkedItems.filter((listItem) => this.getRealValue(listItem, this.checkColumnAttribute) === itemValue).length) {
          this.checkedItems.push(item);
        }
      } else {
        _.remove(this.checkedItems, (listItem) => {
          return this.getRealValue(listItem, this.checkColumnAttribute) === itemValue;
        });
      }
    }

    this.updateCheckboxAll();
    if ($event.items.length === 0) {
      this.checkedItemsValue = [];
    }
    this.checkedItemsChange.emit(this.checkedItemsValue);
  }

  public updateCheckboxAll() {
    for (const item of this.items) {
      if (!this.checkBoxValue[this.getRealValue(item, this.checkColumnAttribute)]) {
        this.checkAllValue = false;
        return;
      }
    }
    this.checkAllValue = true;
  }

  onEdit(current: any) {
    console.log(current)
    if (this.addChange.observers.length > 0) {
      this.updateChange.emit(current);
    } else {
      console.log([current._id]);

      this.router.navigate([current._id], { relativeTo: this.route });
    }
  }

  onDelete(current: any) {
    this.deleteChange.emit(current);
  }

  onBulkLoad() {
    this.modalService.show(BulkloadComponent, { service: this.service }, () => {
      this.refresh();
    });
  }

}
