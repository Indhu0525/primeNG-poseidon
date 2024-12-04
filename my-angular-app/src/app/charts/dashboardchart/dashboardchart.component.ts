import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import {
  ApexChart,
 ApexAxisChartSeries,

} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboardchart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './dashboardchart.component.html',
  styleUrl: './dashboardchart.component.scss'
})
export class DashboardchartComponent {
  colors= ['#FF5733', '#33FF57', '#3357FF']; // Custom colors
  series: ApexAxisChartSeries = [
    {
      data: [22,50,36,27,56,80]
    }
  ];

  chart: ApexChart = {
    type: 'bar', // Changed to 'bar'
    height: 50, // Increased height
    width: 80, // Set width to 100%
    sparkline: {
      enabled: true // Disabled sparkline mode
    },
 
  };

}