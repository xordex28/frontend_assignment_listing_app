import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';
import { UtilsModule } from '../../../utils/utils.module';
import { CategoryEditComponent } from './category-edit/category-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    UtilsModule
  ],
  declarations: [CategoryPage, CategoryEditComponent]
})
export class CategoryPageModule { }
