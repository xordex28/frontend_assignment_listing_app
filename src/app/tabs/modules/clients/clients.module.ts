import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientsPageRoutingModule } from './clients-routing.module';

import { UtilsModule } from '../../../utils/utils.module';
import { ClientsPage } from './clients.page';
import { ClientEditComponent } from './client-edit/client-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientsPageRoutingModule,
    UtilsModule,
    IonicModule
  ],
  declarations: [ClientsPage, ClientEditComponent]
})
export class ClientsPageModule {}
