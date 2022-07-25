import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunction():void; //declara una función que está de manera global en el archivo custom.js, para poder usarla en este modulo sin errores

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  
  constructor(private settingsService:SettingsService) { }

  ngOnInit(): void {
    customInitFunction();
  }

}
