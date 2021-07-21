import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryEditComponent } from './category-edit/category-edit.component';

import { CategoryPage } from './category.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CategoryPage
      },
      {
        path: 'add',
        component: CategoryEditComponent
      },
      {
        path: ':id',
        component: CategoryEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryPageRoutingModule {}
