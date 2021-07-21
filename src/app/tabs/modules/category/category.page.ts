import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { DTColumn } from '../../../utils/generic-table/format/interface';
import { AlertService } from '../../../utils/services/alert.service';
import { ToastService } from '../../../utils/services/toast.service';
import { Category } from '../../../models/models';
import { GenericTableComponent } from '../../../utils/generic-table/generic-table.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  columns: DTColumn[] = [];
  @ViewChild('tabla') tabla!: GenericTableComponent;

  constructor(public categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.columns = [
      {
        attribute: 'description',
        header: 'Descripcion',
        title: true
      },
      {
        attribute: 'active',
        header: 'Esta Activo',
        type: 'bool'
      },
      {
        attribute: 'createdDate',
        header: 'Creado el',
        type: 'date'
      },
      {
        attribute: 'updatedDate',
        header: 'Modificado el',
        type: 'date'
      },
      {
        attribute: '_id',
        header: "Opciones",
        template: "opciones"
      }
    ]
  }

  onAdd() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  onEdit(current: any) {
    this.router.navigate([current._id], { relativeTo: this.route });
  }

  async onDelete(current: any) {
    this.alertService.show('Confirmar Eliminacion', '¿Esta Seguro que desea eliminar esta Categoria?', 'success', () => {
      this.categoryService.remove(current._id).subscribe((response: Category) => {
        this.toastService.show("Eliminado Correctamente", "La categoria fue eliminado correctamente", "success");
        this.tabla.refresh();
      }, (err) => {
        console.log({ err });

        this.toastService.show("Error", err, "error");

      });
    });
  }
}
