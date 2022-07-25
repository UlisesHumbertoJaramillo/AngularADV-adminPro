import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  @Input() public labels1: string[] = [ 'Agua', 'Pan', 'Masitas' ]; //tiene que tener Input para que pueda ser usado por el html
  @Input() public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 10, 20, 30 ],backgroundColor:['#9E120E','#FF5800','#FFB414']}//permite cambiar los colores de cada set de valores
    ]
  };
  
}
