import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category, Client } from '../../../../models/models';
import { CategoryService } from '../../../../services/category.service';
import { ClientService } from '../../../../services/client.service';
import { TaskService } from '../../../../services/task.service';
import { LoadingService } from '../../../../utils/services/loading.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent implements OnInit {

  listClient: Client[] = [];
  listCategory: Category[] = [];
  newTask: FormGroup;
  loading: boolean = false;

  validation_messages = {
    'client': [
      { type: 'required', message: 'El cliente es requerido.' }
    ],
    'category': [
      { type: 'required', message: 'La categoria es requerida.' },
    ],
    'description': [
      { type: 'required', message: 'La descripcion es requerida.' },
    ]
  };
  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private categoryService: CategoryService,
    private clientService: ClientService,
    private loadingService: LoadingService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.loading = true;
    await this.loadingService.presentLoading();
    this.newTask = this.fb.group({
      description: ['', Validators.required],
      category: ['', Validators.required],
      client: ['', Validators.required]
    });
    this.listCategory = [...(await this.categoryService.list().toPromise())];
    this.listClient = [...(await this.clientService.list().toPromise())];
    this.loadingService.close();
    this.loading = false;
  }

  async onSubmit() {
    const newTask = this.newTask.value;
    await this.loadingService.presentLoading();
    this.taskService.add(newTask).subscribe((response) => {
      this.loadingService.close();
      console.log(response);
      this.router.navigateByUrl('/app/task');


    }, (error) => {
      console.log(error);
      this.loadingService.close();
    });
  }

}
