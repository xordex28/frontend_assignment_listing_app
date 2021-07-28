import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ClientService } from 'src/app/services/client.service';
import { Client, PermitApproved, Category } from '../../models/models';


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
  selector: 'app-assing-tasks',
  templateUrl: './assing-tasks.component.html',
  styleUrls: ['./assing-tasks.component.scss'],
})
export class AssingTasksComponent implements OnInit {
  @Input() permits: PermitApproved[] = [];

  @Input() id: string;
  @Input() role: boolean = false;

  @Output() newPermits = new EventEmitter<PermitApproved[]>();
  listClients: Client[] = [];
  listCategories: Category[] = [];

  listPermitsChecked: PermitApproved[] = [];

  listTablePick: any[] = [];

  displayedColumns: string[] = [];
  displayedDisplay: any[] = [];
  dataSource = ELEMENT_DATA;

  constructor(
    private categoryService: CategoryService,
    private clientService: ClientService
  ) {
  }

  async ngOnInit() {
    console.log(this.listPermitsChecked, this.permits);

    this.listPermitsChecked = [...this.permits];
    console.log({ permits: this.permits });

    this.listClients = [...(await this.clientService.list().toPromise())];
    this.listCategories = [...(await this.categoryService.list().toPromise())];

    this.displayedColumns = ['client', ...this.listCategories.map((category) => category._id)];
    this.displayedDisplay = [...this.listCategories.map((category) => { return { 'id': category._id, 'description': category.description }; })];
    console.log(this.displayedColumns);

    this.listClients.forEach((client: Client) => {
      let header: any = { client: client.shortName, clientId: client._id };
      this.listCategories.forEach((category: Category) => {
        header[category._id] = { category: category._id, description: category.description };
      });
      this.listTablePick.push(header);
    });
    console.log(this.listTablePick);

  }

  getPermitChecked(client: string, category: string, checkB?: any) {    
    let selected = false;
    let exist = false;
    let i = 0;
    while (i < this.permits.length && !exist) {
      if (this.permits[i].client === client) {
        let j = 0;
        while (j < this.permits[i].categories.length && !exist) {
          if (this.permits[i].categories[j].category === category) {
            selected = this.permits[i].categories[j].canApprove;
            if (this.permits[i].role) {
              checkB.disabled = true;
            }
            exist = true;
          }
          j++;
        }
      }
      i++;
    }
    return selected;
  }

  setPermitChecked(check: any, client?: string, category?: string) {
    const eventCheck = check.target.checked;
    let exist = false;
    let i = 0;

    let indexClient = -1;
    let indexCategory = -1;
    while (i < this.listPermitsChecked.length && !exist) {
      if (this.listPermitsChecked[i].client === client) {
        indexClient = i;
        let j = 0;
        while (j < this.listPermitsChecked[i].categories.length && !exist) {
          if (this.listPermitsChecked[i].categories[j].category === category) {
            indexCategory = j
            exist = true;
          }
          j++;
        }
      }
      i++;
    }

    if (exist) {
      this.listPermitsChecked[indexClient].categories[indexCategory].canApprove = eventCheck;
    } else {
      if (indexClient >= 0) {
        if (indexCategory < 0) {
          this.listPermitsChecked[indexClient].categories.push({
            category: category,
            canApprove: eventCheck
          })
        }
      } else {
        this.listPermitsChecked.push({
          client: client,
          categories: [
            {
              category: category,
              canApprove: eventCheck
            }
          ]
        })
      }
    }


  }

  savePermits() {
    console.log(this.listPermitsChecked, this.permits);

    this.newPermits.emit(this.listPermitsChecked);
  }

}
