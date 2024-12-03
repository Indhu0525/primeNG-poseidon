import { Component,ViewEncapsulation } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-layout-rightpanel',
  imports: [ButtonModule,SidebarModule,CheckboxModule,FormsModule],
  templateUrl: './layout-rightpanel.component.html',
  styleUrl: './layout-rightpanel.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
})
export class LayoutRightpanelComponent {
  sidebarVisible2: boolean = false;
  tasks = [
    { label: 'Sales reports', dueDate: 'Today', checked: true },
    { label: 'Pay invoices', dueDate: 'Today', checked: true },
    { label: 'Dinner with Tony', dueDate: 'Today, 22:36', checked: false },
    { label: 'Client meeting', dueDate: 'Today', checked: false },
  ];

  upcomingTasks = [
    { label: 'New representative meeting', dueDate: '27, May', checked: false },
    { label: 'Flight tickets', dueDate: '28, May', checked: false },
    { label: 'Generate charts', dueDate: '29, May', checked: false },
    { label: 'Delete old files', dueDate: '30, May', checked: false },
  ];

}
