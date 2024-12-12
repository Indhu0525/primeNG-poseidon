import { CommonModule} from '@angular/common';
import { Component,Input, ViewEncapsulation  } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Breadcrumb, BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  imports: [BreadcrumbModule,CommonModule],
  standalone: true,
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  encapsulation: ViewEncapsulation.None // Disable encapsulation
})
export class BreadcrumbComponent {
  @Input() items: MenuItem[] = [];
}
