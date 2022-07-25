import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/* Servicio que controla la lógica del sidebar 

es una forma centralizada de controlar el menu de opciones*/
export class SidebarService {

  menu: any[] = [

    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      subMenu: [
        { title: 'main', url: '/' },
        { title: 'ProgressBar', url: 'progress' },
        { title: 'Gráfica', url: 'grafica1' },]
    }
  ];

  constructor() { }
}
