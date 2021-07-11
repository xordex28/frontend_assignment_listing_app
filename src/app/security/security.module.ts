import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { SecurityPageRoutingModule } from './security-routing.module';

import { LoginPage } from './login/login.page';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SecurityPageRoutingModule,
    UtilsModule
  ],
  declarations: [LoginPage]
})
export class SecurityPageModule {}
