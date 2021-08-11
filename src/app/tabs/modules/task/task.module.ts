import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskPageRoutingModule } from './task-routing.module';

import { TaskPage } from './task.page';
import { UtilsModule } from '../../../utils/utils.module';
import { TaskAddComponent } from './task-add/task-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskPageRoutingModule,
    UtilsModule,
    ReactiveFormsModule
  ],
  declarations: [TaskPage, TaskAddComponent]
})
export class TaskPageModule { }
