import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UserPage
      },
      {
        path: 'add',
        component: UserEditComponent
      },
      {
        path: ':id',
        component: UserEditComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule { }
