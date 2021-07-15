import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';
import { UtilsModule } from '../utils/utils.module';

import { TabsPage } from './tabs.page';
import { ModulesComponent } from './modules/modules.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    UtilsModule
  ],
  declarations: [TabsPage, ModulesComponent]
})
export class TabsPageModule { }
