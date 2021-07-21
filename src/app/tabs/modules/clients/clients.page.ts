import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { DTColumn } from '../../../utils/generic-table/format/interface';
import { AlertService } from '../../../utils/services/alert.service';
import { ToastService } from '../../../utils/services/toast.service';
import { Client } from '../../../models/models';
import { GenericTableComponent } from '../../../utils/generic-table/generic-table.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  columns: DTColumn[] = [];
  @ViewChild('tabla') tabla!: GenericTableComponent;

  constructor(public clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.columns = [
      {
        attribute: 'document',
        header: 'Documento',
      },
      {
        attribute: 'shortName',
        header: 'Nombre Corto',
      },
      {
        attribute: 'name',
        header: 'Nombre',
      },
      {
        attribute: 'phoneNumber',
        header: 'Telefono',
      },
      {
        attribute: 'email',
        header: 'Correo',
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
    this.alertService.show('Confirmar Eliminacion', '¿Esta Seguro que desea eliminar el cliente?', 'success', () => {
      this.clientService.remove(current._id).subscribe((response: Client) => {
        this.toastService.show("Eliminado Correctamente", "El cliente fue eliminado correctamente", "success");
        this.tabla.refresh();
      }, (err) => {
        console.log({ err });

        this.toastService.show("Error", err, "error");

      });
    });
  }

}
