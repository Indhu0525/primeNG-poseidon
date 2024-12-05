import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-piechart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {
  data: any;
  options: any;

  ngOnInit() {
    const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');

    this.data = {
      datasets: [
        {
          data: [183, 62, 10],
          backgroundColor: ['#FFFFFF', '#4581B9', '#8BB0D2'], // Updated colors
          hoverBackgroundColor: ['#FFFFFF', '#4581B9', '#8BB0D2'],
          borderWidth: 0 // Removed border
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        },
      },
    
    };
  }


}
