import { Injectable } from '@angular/core';
/*
  Los servicios sirven para tener informacion de manera global dentro de la aplicacion
  Este servicio me sirve para mantener el estado de settings de la aplicación

  Se pueden agrupar en cada modulo, en caso de que hallan muchos servicios.

  Para usarlo, es necesario inyectarlo.

  Hay que tener en cuanta que los servicios me permite tener la lógica de la aplicación separado de los componentes
  el objetivo es dejar a los componentes lo mas simples posibles.
*/
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');//es Private porque ya no es necesario exponer el atributo

  constructor() {
    /*se implementa el color almacenado elegido por el usuario, al cargar la página */

    //./assets/css/colors/blue-dark.css
    const url = localStorage.getItem('theme') || "./assets/css/colors/blue-dark.css"
    this.linkTheme?.setAttribute('href', url);
  }


  /*método por el cual podemos modificar el estilo general de la página*/
  changeTheme(theme: string) {


    const url = "./assets/css/colors/" + theme + ".css"//creamos el string que es modificado para actualizar luego el href

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);//guarda el link del css en localstorage, no guardar datos sensibles en el localstorage
    this.checkCurrentTheme();
  }

  /*Método para indicar el theme seleccionado */
  checkCurrentTheme() {
    //visita el DOM cada cez que se ejecuta el método, esto baja la performace, pero mejora el código.
    const links = document.querySelectorAll('.selector');//selecciona todos los links con la clase selector, devuelve una lista de elementos.
    links.forEach(elem =>{
      elem.classList.remove('working');//elimina de cada elemento la clase working, esto quita el tilde de selección.
      const btnTheme = elem.getAttribute('data-theme');//obtiene el valor del atributo del link
      const btnThemeLink = "./assets/css/colors/" + btnTheme + ".css";
      const currentTheme = this.linkTheme?.getAttribute('href');
      if(btnThemeLink === currentTheme){
        elem.classList.add('working');
      }
    })
  }
}
