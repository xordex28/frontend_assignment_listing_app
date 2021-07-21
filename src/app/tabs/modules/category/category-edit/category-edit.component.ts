import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../../services/category.service';
import { Category } from '../../../../models/models';
import { ToastService } from '../../../../utils/services/toast.service';
import { LoadingService } from '../../../../utils/services/loading.service';


@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent implements OnInit {
  categoryAlreadyExist: boolean = false;
  newCategory: FormGroup;
  id: string = '';
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private router: Router) {

  }

  validation_messages = {
    'description': [
      { type: 'required', message: 'Descripcion es requerida.' },
    ],
    'active': [
      { type: 'required', message: 'Activo es requerido.' },
    ]
  };
  ngOnInit() {
    this.newCategory = this.fb.group({
      description: ['', Validators.required],
      active: [true, Validators.required]
    })
    this.route.params.subscribe((params) => {
      if ('id' in params) {
        console.log(params);
        this.id = params.id;
        this.categoryService.get(this.id).subscribe((currentCategory: Category) => {
          this.newCategory.controls.description.setValue(currentCategory.description);
          this.newCategory.controls.active.setValue(currentCategory.active);
        });
      }
    });

  }

  async getCategoryByName() {
    if (this.newCategory.value.description !== '') {
      await this.loadingService.presentLoading();
      const category = await this.categoryService.getCategoryByName(this.newCategory.value.description).toPromise();
      if (category) {
        this.categoryAlreadyExist = true;
      } else {
        this.categoryAlreadyExist = false;
      }
      this.loadingService.close()
    }
  }

  async onSubmit() {
    await this.loadingService.presentLoading('Guardando...')
    const categoryBody = this.newCategory.value;
    if (this.id) {
      this.categoryService.update(this.id, categoryBody).subscribe((response: Category) => {
        console.log({ response });
        this.loadingService.close();
        this.toastService.show('Guardado Correctamente', 'Se modifico correctamente', 'success');
        this.router.navigateByUrl('/app/category');
      }, (err) => {
        console.log({ err });
        this.loadingService.close();
        this.toastService.show('Error', err, 'error');
      });
    } else {
      this.categoryService.add(categoryBody).subscribe((response: Category) => {
        console.log({ response });
        this.loadingService.close();
        this.toastService.show('Guardado Correctamente', 'Se ha guardado correctamente', 'success');
        this.router.navigateByUrl('/app/category');

      }, (err) => {
        console.log({ err });
        this.loadingService.close();
        this.toastService.show('Error', err, 'error');
      });
    }
  }
}
