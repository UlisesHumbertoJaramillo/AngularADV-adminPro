import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncremetadorComponent } from './incremetador/incremetador.component';
import { FormsModule } from '@angular/forms';
import { DoughnutComponent } from './doughnut/doughnut.component';

//modulo de graficas
import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    IncremetadorComponent,
    DoughnutComponent
  ],
  exports: [
    IncremetadorComponent,
    DoughnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
