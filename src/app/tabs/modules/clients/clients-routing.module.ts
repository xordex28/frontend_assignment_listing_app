import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientEditComponent } from './client-edit/client-edit.component';

import { ClientsPage } from './clients.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ClientsPage

      },
      {
        path: 'add',
        component: ClientEditComponent
      },
      {
        path: ':id',
        component: ClientEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsPageRoutingModule { }
