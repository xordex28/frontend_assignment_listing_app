import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ShowHidePasswordComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    ShowHidePasswordComponent
  ]
})
export class UtilsModule { }
