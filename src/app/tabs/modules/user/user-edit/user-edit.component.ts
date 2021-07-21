import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { Role, User, PermitApproved } from '../../../../models/models';
import { ToastService } from '../../../../utils/services/toast.service';
import { LoadingService } from '../../../../utils/services/loading.service';
import * as md5 from 'md5';
import { RoleService } from '../../../../services/role.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  //TODO: Validacion de usuario y password no requerida, y adaptacion de roll de form builder a form control
  //TODO: Usuario buscador coincidencia
  newUser: FormGroup;
  canApproved: boolean = false;
  roles: Role[] = [];
  id: string = '';
  userAlreadyExist: boolean = false;
  permits: PermitApproved[] = [];

  loading: boolean = false;


  validation_messages = {
    'username': [
      { type: 'required', message: 'Usuario es requerido.' },
      { type: 'pattern', message: 'Ingresa un Email valido' }
    ],
    'password': [
    ],
    'firstName': [
      { type: 'required', message: 'El nombre es requerido.' },
    ],
    'lastName': [
      { type: 'required', message: 'El apellido es requerido.' },
    ],
    'role': [
      { type: 'required', message: 'El Roll es requerido.' },
    ]
  };

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private roleService: RoleService,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private router: Router) { }

  async ngOnInit() {
    this.loading = true;
    this.newUser = this.fb.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      password: [''],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      role: ['', Validators.compose([Validators.required])],
      active: [true, Validators.compose([Validators.required])]
    });
    await this.loadingService.presentLoading('Por favor Espere...');
    this.roles = [...(await this.roleService.list().toPromise())];
    this.route.params.subscribe((params) => {
      if ('id' in params) {
        this.id = params.id;
        this.userService.get(this.id).subscribe((currentUser: User) => {
          if (currentUser.role['canApprove']) {
            this.canApproved = true;
          }

          this.newUser.controls.username.setValue(currentUser.username);
          this.newUser.controls.firstName.setValue(currentUser.firstName);
          this.newUser.controls.lastName.setValue(currentUser.lastName);
          this.newUser.controls.role.setValue(currentUser.role['_id']);
          this.newUser.controls.active.setValue(currentUser.active);
          if (this.canApproved) {
            this.userService.getAssingPermits(this.id).subscribe((response: any) => {
              console.log({ response });
              if (response) {
                this.permits = response['permitsRole'].map((current: any) => {
                  return { ...current, role: true }
                });

                this.permits = [...this.permits, ...response['permitsUser']];
              }
              console.log(this.permits);

              this.loading = false;
              this.loadingService.close();
            });
          }
        });
      }
      this.loadingService.close();

    });

  }

  async getUserByUsername() {
    if (this.newUser.value.username !== '') {
      await this.loadingService.presentLoading();
      const user = await this.userService.getUserByUsername(this.newUser.value.username).toPromise();
      if (user) {
        this.userAlreadyExist = true;
      } else {
        this.userAlreadyExist = false;
      }
      this.loadingService.close()
    }
  }

  async onSubmitPermits(permits: PermitApproved[]) {
    if (permits.length <= 0) {
      this.toastService.show('Error', 'Tiene que seleccionar al menos un permiso', 'error');
    } else {
      await this.loadingService.presentLoading('Guardando Permisos');
      try {
        await this.userService.assingPermits(this.id, permits).toPromise();
        this.toastService.show('Guardado Correctamente', 'Se modifico correctamente', 'success');

        this.loadingService.close();
      } catch (error) {
        this.toastService.show('Error', 'No se pudieron guardar los permisos', 'error');
        this.loadingService.close();

      }
    }
  }

  async onSubmit() {
    await this.loadingService.presentLoading('Guardando...')
    let userBody = this.newUser.value;
    if (userBody.password) {
      userBody.password = md5(userBody.password);
    }
    if (this.id) {
      delete userBody.username;
      this.userService.update(this.id, userBody).subscribe((response: User) => {
        console.log({ response });
        this.loadingService.close();
        this.toastService.show('Guardado Correctamente', 'Se modifico correctamente', 'success');
        this.router.navigateByUrl('/app/user');
      }, (err) => {
        console.log({ err });
        this.loadingService.close();
        this.toastService.show('Error', err, 'error');
      });
    } else {
      this.userService.add(userBody).subscribe((response: User) => {
        console.log({ response });
        this.loadingService.close();
        this.toastService.show('Guardado Correctamente', 'Se ha guardado correctamente', 'success');
        this.router.navigateByUrl('/app/user');

      }, (err) => {
        console.log({ err });
        this.loadingService.close();
        this.toastService.show('Error', err, 'error');
      });
    }
  }

}
