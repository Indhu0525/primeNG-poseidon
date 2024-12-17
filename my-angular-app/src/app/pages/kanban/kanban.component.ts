import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';//breadcrumb
import { MenuItem } from 'primeng/api';//breadcrumb
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';//breadcrumb
@Component({
  selector: 'app-kanban',
  imports: [BreadcrumbComponent,BreadcrumbModule],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss'
})
export class KanbanComponent {
  items: MenuItem[] | undefined;//breadcrumb
  breadcrumbItems: MenuItem[] = [
    { label: 'APPS', },
    { label: '  KANBAN', },
    { label: '  BOARD', },
  ];
}
