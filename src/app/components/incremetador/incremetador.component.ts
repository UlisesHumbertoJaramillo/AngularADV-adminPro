import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incremetador',
  templateUrl: './incremetador.component.html',
  styleUrls: ['./incremetador.component.css']
})
export class IncremetadorComponent implements OnInit{

  @Input('valor') progreso: number = 50;// al agregar Input podemos ingresar valores desde el objeto padre... al colocar 'valor' nombramos la variable hacia afuera.
  @Input() btnClass: string = 'btn-primary';// un valor para determinar el color de los botones, desdes los componentes padres.



  @Output() outputValue:EventEmitter<number>= new EventEmitter();//permite emitir un valor llamado outputValue de tipo number, e inicializado

  /* 
  get getProgreso() {
    return `${this.progreso}%`;<-- el % se debe a que se concatena ese simbol para ser usado como porcentaje en un estilo css
  }
 */

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.btnClass = `btn ${this.btnClass}`;//agrega btn antes de la clase que le da el color al botón, asi desde los componentes padres enviamos solamente la clase.
    
  }


  changeValue(value: number) {
    if (this.progreso < 0) {
      this.progreso = 0;
      this.outputValue.emit(0);//emite el valor 0
    } else if (this.progreso > 100) {
      this.progreso = 100;
      this.outputValue.emit(100);
    } else {
      this.progreso += value;
      this.outputValue.emit(this.progreso);
    }

  }

  onChange(value:number){//detecta cualquier cambio en el componente, es utilizado para hacer una comprobación antes de emitir el valor a la barra de progreso
    if (value < 0) {//comprobación ante cambios de valor en el campo de ingreso de valores.
      this.progreso = 0;
    } else if (value > 100) {
      this.progreso = 100;
    }else{
      this.progreso = value;
    }

    this.outputValue.emit(this.progreso);//emite el valor del progreso después de las verificaciones anteriores
  }

}
