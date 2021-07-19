import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleEditComponent } from './role-edit/role-edit.component';

import { RolePage } from './role.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RolePage
      },
      {
        path: 'add',
        component: RoleEditComponent
      },
      {
        path: ':id',
        component: RoleEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolePageRoutingModule {}
