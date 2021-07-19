import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolePageRoutingModule } from './role-routing.module';

import { RolePage } from './role.page';
import { UtilsModule } from '../../../utils/utils.module';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RolePageRoutingModule,
    UtilsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [RolePage, RoleEditComponent]
})
export class RolePageModule { }
