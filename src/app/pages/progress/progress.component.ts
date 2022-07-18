import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'
  ]
})
export class ProgressComponent {

 progreso1:number = 45;//valores que indican el valor inicial del progreso, es usado para paasrle el valor al incrementador
 progreso2:number = 35;

 get getProgreso1(){
  return `${this.progreso1}%`;
 }

 get getProgreso2(){
  return `${this.progreso2}%`;
 }

 //Funciones para recibir el evento de outputValue
 changeValueChild(value:number){
  
 }

}
