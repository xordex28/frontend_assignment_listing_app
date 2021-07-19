import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DTColumn } from '../../../utils/generic-table/format/interface';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericTableComponent } from '../../../utils/generic-table/generic-table.component';
import { AlertService } from '../../../utils/services/alert.service';
import { ToastService } from '../../../utils/services/toast.service';
import { User } from '../../../models/models';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  columns: DTColumn[] = [];
  @ViewChild('tabla') tabla!: GenericTableComponent;

  constructor(public userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.columns = [
      {
        attribute: 'firstName',
        header: 'Nombre',
      },
      {
        attribute: 'lastName',
        header: 'Apellido',
      },
      {
        attribute: 'username',
        header: 'Usuario',
      },
      {
        attribute: 'role.description',
        header: 'Role',
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
    this.alertService.show('Confirmar Eliminacion', '¿Esta Seguro que desea eliminar este usuario?', 'success', () => {
      this.userService.remove(current._id).subscribe((response: User) => {
        this.toastService.show("Eliminado Correctamente", "El usuario fue eliminado correctamente", "success");
        this.tabla.refresh();
      }, (err) => {
        console.log({ err });

        this.toastService.show("Error", err, "error");

      });
    });
  }

}
