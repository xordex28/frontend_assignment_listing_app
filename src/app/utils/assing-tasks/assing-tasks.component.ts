import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ClientService } from 'src/app/services/client.service';
import { Client, PermitApproved, Category } from '../../models/models';

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
              checkB.el.disabled = true;
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
    const eventCheck = check.detail.checked;
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
