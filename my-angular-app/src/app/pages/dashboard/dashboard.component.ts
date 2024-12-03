import { Component,ViewEncapsulation,OnInit  } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  imports: [BreadcrumbModule],
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
          { label: 'Electronics' }, 
          { label: 'Computer' }, 
          { label: 'Accessories' }, 
          { label: 'Keyboard' }, 
          { label: 'Wireless' }
      ];

      this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
