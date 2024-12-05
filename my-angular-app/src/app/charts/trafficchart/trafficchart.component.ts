import { Component , OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-trafficchart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './trafficchart.component.html',
  styleUrl: './trafficchart.component.scss'
})
export class TrafficchartComponent {
  data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
       
            datasets: [
                {
                    data: [100, 100],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--gray-200'), ],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--gray-200'),]
                }
            ]
        };


        this.options = {
            cutout: '70%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };
    }
    updateChart(source: string) {
        if (source === 'facebook') {
          this.data.datasets[0].data = [48,52];
        } else if (source === 'twitter') {
          this.data.datasets[0].data = [36,74];
        } else if (source === 'github') {
          this.data.datasets[0].data = [12,88];
        }
        // Trigger change detection
        this.data = { ...this.data };
      }
}
