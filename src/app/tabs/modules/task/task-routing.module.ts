import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskAddComponent } from './task-add/task-add.component';

import { TaskPage } from './task.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TaskPage
      },
      {
        path: 'add',
        component: TaskAddComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/app/task'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskPageRoutingModule { }
