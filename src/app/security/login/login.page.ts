import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User, AuthModel } from '../../models/models';
import { ToastService } from '../../utils/requests/toast.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errors: any;
  cargando = false;
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email es requerido.' },
      { type: 'pattern', message: 'Ingresa un Email valido' }
    ],
    'password': [
      { type: 'required', message: 'Password es requerida.' },
      { type: 'minlength', message: 'Password debe tener minino 5 caracteres.' }
    ]
  };

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('luis.gustavo.282000@gmail.com', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }

  async login() {
    this.cargando = true;
    this.authService.login(this.loginForm.value.email,
      this.loginForm.value.password).subscribe((data: User) => {
        console.log(data);
        this.toastService.show('Ingreso Exitoso', 'Bienvenido al sistema', 'success');
        this.cargando = false;
        this.router.navigate(['/app/tab1']);

      }, (error) => {
        console.log(error);
        this.toastService.show('Error', error, 'error');
        this.cargando = false;
      });
  }

  async getUser() {
    this.authService.list().subscribe((data: User[]) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }
}
