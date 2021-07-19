import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        component: ModulesComponent
      },
      {
        path: 'user',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserPageModule)
      },
      {
        path: 'role',
        loadChildren: () => import('./modules/role/role.module').then(m => m.RolePageModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
