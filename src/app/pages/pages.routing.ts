import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  //Estas rutas son las protegidas, por lo tanto se acceden a travéz de un logIn
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' },
      }, //data es un parametro de ruta, sirve para el breadcrums
      {
        path: 'progress',
        component: ProgressComponent,
        data: { titulo: 'progress' },
      },
      {
        path: 'grafica1',
        component: Grafica1Component,
        data: { titulo: 'grafica1' },
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: { titulo: 'account-settings' },
      },
      {
        path: 'promesas',
        component: PromesasComponent,
        data: { titulo: 'promesas' },
      },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'rxjs' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
