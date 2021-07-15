import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';

import { MatTableModule } from '@angular/material/table';
import { GenericTableComponent } from './generic-table/generic-table.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ShowHidePasswordComponent,
    GenericTableComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    MatTableModule
  ],
  exports: [
    HeaderComponent,
    ShowHidePasswordComponent,
    GenericTableComponent
  ]
})
export class UtilsModule { }
