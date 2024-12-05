import { Component,OnInit  } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-productschart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './productschart.component.html',
  styleUrl: './productschart.component.scss'
})
export class ProductschartComponent {
  data: any;
  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [67, 98, 27, 88, 38, 3, 22,60,56],
                  fill: false,
                  tension: 0.5,
                  stroke:1,
                  borderColor: documentStyle.getPropertyValue('--blue-400'),
                  backgroundColor: 'rgba(244, 249, 254, 0.2)', // Blue with reduced opacity
              },
              {
                  label: 'Second Dataset',
                  data: [31, 83, 67, 29, 62, 25, 59,26,46],
                  fill: true,
                  borderDash: [5, 5],
                  tension: 0.5,
                  borderColor: documentStyle.getPropertyValue('--teal-700'),
                  backgroundColor: 'rgba(254, 247, 239, 0.3)', // Teal with reduced opacity
              },
          ]
      };
      
      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                    color: surfaceBorder, // Visible grid lines
                    lineWidth: 1, // Thin grid lines for clarity
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                    color: surfaceBorder, // Visible grid lines
                    lineWidth:1, // Thin grid lines for clarity
                  }
              }
          }
      };
  }
}
