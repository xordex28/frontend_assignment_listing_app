import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';
import { UtilsModule } from '../../../utils/utils.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UserPageRoutingModule,
    UtilsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [UserPage, UserEditComponent]
})
export class UserPageModule { }
