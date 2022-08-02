import { Component, OnInit, resolveForwardRef } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //llamamos a la promesa
    this.getUsuarios().then(usuarios => console.log(usuarios));
    /*
    //no se usa de ésta manera en Angular
    //creacion de una promesa básica
    const promesa = new Promise((resolve,reject)=>{
      if(false){
        resolve('hola Mundo');//cuando la promesa se resuleve sactifactoriamente

      }else{
        reject('algo salió mal');//cuando la promesa devuelve un error

      }
      

    })

    //se hace un llamado a la promesa creada anteriormete
    promesa.then(mensaje =>{
      console.log(mensaje)
    })
    .catch(error =>{
      console.log('mensaje de error :',error);
    })
    */
  }
  

  getUsuarios(){
    //se crea una promesa que se contacta con un servicio externo, para poder ser usada internamente
    const promesa = new Promise(resolve =>{
      //se conecta a un servicio y trae usuarios
      fetch('https://reqres.in/api/users').then((response)=>response.json()).then((body)=>resolve(body.data));

    });
    return promesa;
  }

}
