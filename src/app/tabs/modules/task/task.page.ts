import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskResponse, Task } from '../../../models/models';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  tasks: TaskResponse = {
    all: [],
    answered: [],
    entered: []
  };
  pending: TaskResponse = {
    all: [],
    answered: [],
    entered: []
  };
  approved: TaskResponse = {
    all: [],
    answered: [],
    entered: []
  };
  reject: TaskResponse = {
    all: [],
    answered: [],
    entered: []
  };
  taskSelect: TaskResponse;
  indexSectionSelected: number = -1;
  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit() {
    console.log('hello from tasks');

    this.tasks = { ...await this.taskService.getAllTask().toPromise() };
    this.separeTask();

  }

  onAdd() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  separeTask() {
    this.tasks.all.forEach((currentTask: Task) => {
      if (!currentTask.rejected && !currentTask.approved) {
        this.pending.all.push(currentTask);
      }

      if (currentTask.approved) {
        this.approved.all.push(currentTask);
      }

      if (currentTask.rejected) {
        this.reject.all.push(currentTask);
      }
    });

    this.tasks.entered.forEach((currentTask: Task) => {
      if (!currentTask.rejected && !currentTask.approved) {
        this.pending.entered.push(currentTask);
      }

      if (currentTask.approved) {
        this.approved.entered.push(currentTask);
      }

      if (currentTask.rejected) {
        this.reject.entered.push(currentTask);
      }
    });

    this.tasks.answered.forEach((currentTask: Task) => {
      if (!currentTask.rejected && !currentTask.approved) {
        this.pending.answered.push(currentTask);
      }

      if (currentTask.approved) {
        this.approved.answered.push(currentTask);
      }

      if (currentTask.rejected) {
        this.reject.answered.push(currentTask);
      }
    });
  }

  selectSectionTask(section: TaskResponse, index: number) {
    this.taskSelect = { ...section };
    this.indexSectionSelected = index;
  }

}
