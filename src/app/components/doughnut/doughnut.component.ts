import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent {

// Doughnut
@Input() public title : string = 'Without title';
@Input() public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
@Input() public doughnutChartData: ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [
    { data: [ 350, 450, 100 ],backgroundColor:['#9E120E','#FF5800','#FFB414']}//permite cambiar los colores de cada set de valores
  ]
};
public doughnutChartType: ChartType = 'doughnut';


}
