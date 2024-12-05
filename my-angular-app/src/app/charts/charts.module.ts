import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { DashboardchartComponent } from './dashboardchart/dashboardchart.component';
import { ProductschartComponent } from './productschart/productschart.component';
import { TrafficchartComponent } from './trafficchart/trafficchart.component';
import { PiechartComponent } from './piechart/piechart.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule, ChartModule ,DashboardchartComponent,ProductschartComponent,TrafficchartComponent,PiechartComponent
  ]
})
export class ChartsModule {

 }
