import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';

import { MatTableModule } from '@angular/material/table';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BulkloadComponent } from './bulkload/bulkload.component';
import { CdkTableModule } from '@angular/cdk/table';
import { ModalRefreshLoginComponent } from './modal-refresh-login/modal-refresh-login.component';
import { AssingTasksComponent } from './assing-tasks/assing-tasks.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ShowHidePasswordComponent,
    GenericTableComponent,
    BulkloadComponent,
    ModalRefreshLoginComponent,
    AssingTasksComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    CdkTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [
    HeaderComponent,
    ShowHidePasswordComponent,
    GenericTableComponent,
    AssingTasksComponent
  ],
  entryComponents: [
    ModalRefreshLoginComponent
  ]
})
export class UtilsModule { }
