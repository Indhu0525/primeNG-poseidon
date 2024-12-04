import { Component,ViewEncapsulation,OnInit  } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { ChartsModule } from '../../charts/charts.module';
import { DashboardchartComponent } from '../../charts/dashboardchart/dashboardchart.component';
@Component({
  selector: 'app-dashboard',
  imports: [BreadcrumbModule,ChartsModule,DashboardchartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [
          { label: 'DASHBOARD' }, 
      ];

      // this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
