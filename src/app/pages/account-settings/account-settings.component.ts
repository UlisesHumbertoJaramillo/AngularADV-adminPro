import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  //se injecta el servicio para poder usar sus métodos en este componente
  constructor(private settingsService :SettingsService) { }

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }
  /*método por el cual podemos modificar el estilo general de la página*/
  changeTheme(theme: string) {
    this.settingsService.changeTheme(theme);//utilizamos el método provistpo por el servicio.
  }
  

}
