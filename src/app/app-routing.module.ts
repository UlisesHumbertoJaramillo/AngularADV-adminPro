import { NgModule } from '@angular/core';
//modules
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { PagesRoutingModule } from './pages/pages.routing';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';


const routes: Routes = [


  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//ruta por defecto
  

  
  { path: '**', component: NopagefoundComponent },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
