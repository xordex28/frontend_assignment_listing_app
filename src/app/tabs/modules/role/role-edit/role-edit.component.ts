import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../../../../services/role.service';
import { PermitApproved, Role } from '../../../../models/models';
import { ToastService } from '../../../../utils/services/toast.service';
import { LoadingService } from '../../../../utils/services/loading.service';


@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss'],
})
export class RoleEditComponent implements OnInit {

  newRole: FormGroup;
  id: string = '';
  permits: PermitApproved[] = [];
  loading: boolean = false;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private roleService: RoleService,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private router: Router) {

  }

  validation_messages = {
    'description': [
      { type: 'required', message: 'Descripcion es requerida.' },
    ],
    'canApprove': [
      { type: 'required', message: 'Aprobar es requerido.' },
    ],
    'active': [
      { type: 'required', message: 'Activo es requerido.' },
    ]
  };
  ngOnInit() {
    this.newRole = this.fb.group({
      description: ['', Validators.required],
      canApprove: [false, Validators.required],
      active: [true, Validators.required]
    })
    this.route.params.subscribe((params) => {
      this.loading = true;
      if ('id' in params) {
        console.log(params);
        this.id = params.id;
        this.roleService.get(this.id).subscribe((currentRole: Role) => {
          this.newRole.controls.description.setValue(currentRole.description);
          this.newRole.controls.canApprove.setValue(currentRole.canApprove);
          this.newRole.controls.active.setValue(currentRole.active);
          this.roleService.getAssingPermits(this.id).subscribe((response: any) => {
            console.log({ response });
            if (response) {
              this.permits = [...response];
            }
            console.log(this.permits);

            this.loading = false;
            this.loadingService.close();
          });
        });
      }
    });

  }

  async onSubmit() {
    await this.loadingService.presentLoading('Guardando...')
    const roleBody = this.newRole.value;
    if (this.id) {
      this.roleService.update(this.id, roleBody).subscribe((response: Role) => {
        console.log({ response });
        this.loadingService.close();
        this.toastService.show('Guardado Correctamente', 'Se modifico correctamente', 'success');
        this.router.navigateByUrl('/app/role');
      }, (err) => {
        console.log({ err });
        this.loadingService.close();
        this.toastService.show('Error', err, 'error');
      });
    } else {
      this.roleService.add(roleBody).subscribe((response: Role) => {
        console.log({ response });
        this.loadingService.close();
        this.toastService.show('Guardado Correctamente', 'Se ha guardado correctamente', 'success');
        this.router.navigateByUrl('/app/role');

      }, (err) => {
        console.log({ err });
        this.loadingService.close();
        this.toastService.show('Error', err, 'error');
      });
    }
  }

  async onSubmitPermits(permits: PermitApproved[]) {
    if (permits.length <= 0) {
      this.toastService.show('Error', 'Tiene que seleccionar al menos un permiso', 'error');
    } else {
      await this.loadingService.presentLoading('Guardando Permisos');
      try {
        await this.roleService.assingPermits(this.id, permits).toPromise();
        this.toastService.show('Guardado Correctamente', 'Se modifico correctamente', 'success');

        this.loadingService.close();
      } catch (error) {
        this.toastService.show('Error', 'No se pudieron guardar los permisos', 'error');
        this.loadingService.close();

      }
    }
  }
}
