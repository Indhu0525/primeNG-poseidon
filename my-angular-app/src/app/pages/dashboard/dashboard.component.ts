import { Component,ViewEncapsulation,OnInit  } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { ChartsModule } from '../../charts/charts.module';
import { DashboardchartComponent } from '../../charts/dashboardchart/dashboardchart.component';
import { ProductschartComponent } from '../../charts/productschart/productschart.component';
import { TrafficchartComponent } from '../../charts/trafficchart/trafficchart.component';
import { PiechartComponent } from '../../charts/piechart/piechart.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChipsModule } from 'primeng/chips';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ProgressBarModule } from 'primeng/progressbar';
@Component({
  selector: 'app-dashboard',
  imports: [ProgressBarModule,RatingModule,FormsModule,BreadcrumbModule,ChartsModule,ProductschartComponent,TrafficchartComponent,PiechartComponent,AvatarGroupModule,AvatarModule,OverlayPanelModule,InputGroupModule,InputGroupAddonModule,ButtonModule
    ,InputTextModule,ChipsModule,CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
  items: MenuItem[] | undefined;
  rating1: number = 2;//rating
  rating2: number = 1; //rating 
  home: MenuItem | undefined;
  members = [
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
];
  ngOnInit() {
      this.items = [
          { label: 'DASHBOARD' }, 
      ];

      // this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
