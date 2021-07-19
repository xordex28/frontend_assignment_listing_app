import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../security/services/auth.service';
import { ToastService } from '../services/toast.service';
import { API } from '../requests/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-refresh-login',
  templateUrl: './modal-refresh-login.component.html',
  styleUrls: ['./modal-refresh-login.component.scss'],
})
export class ModalRefreshLoginComponent implements OnInit {
  @Input() getTimed: number;
  initialTime: number = 0;
  isAllow: boolean = false;
  interval: any;

  //login
  loginsForm: FormGroup;
  errors: any;
  cargando = false;
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(private controler: ModalController,
    private userService: AuthService,
    private toastService: ToastService,
    public router: Router) { }

  ngOnInit() {
    if (this.getTimed > 0) {
      this.interval = setInterval(() => {
        if (this.initialTime < this.getTimed - 1) {
          this.initialTime++;
        } else {
          clearInterval(this.interval);
          this.controler.dismiss(false);
        }
      }, 1000);
    }
    this.loginsForm = new FormGroup({
      'email': new FormControl(localStorage.getItem(API.EMAIL), Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }
  extend() {
    clearInterval(this.interval);
    this.isAllow = true;
  }
  notExtend() {
    if (this.getTimed > 0) {
      clearInterval(this.interval);
    }
    this.isAllow = false;
    this.controler.dismiss(false);
  }

  doLogin(): void {
    if (this.loginsForm.value.email === localStorage.getItem(API.EMAIL)) {
      this.cargando = true;
      this.userService.login(this.loginsForm.value.email, this.loginsForm.value.password).subscribe(data => {
        if (data.accesToken) {
          this.controler.dismiss(true);
        }
      },
        (error: any) => {
          if (error.status && error.status === 0) {
            this.toastService.show('ERROR', 'No es posible conectarse al servidor', 'error');
            return;
          }
          if (error.error.detail) {
            this.errors = error.error;
            this.toastService.show('Login', 'No se pudo iniciar sesión', 'success');
          }
        }
      ).add(() => this.cargando = false);
    } else {
      this.toastService.show('ERROR', 'Tiene que extender con el correo iniciado previamente', 'error');
    }

  }
}
