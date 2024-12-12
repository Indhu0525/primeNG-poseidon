import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';//breadcrumb
import { MenuItem } from 'primeng/api';//breadcrumb
import { FormsModule } from '@angular/forms';//dropdown
import { DropdownModule } from 'primeng/dropdown';//dropdown
import { CardModule } from 'primeng/card';//card
import { ButtonModule } from 'primeng/button';//card
import { PaginatorModule } from 'primeng/paginator';//paginator
import { CommonModule } from '@angular/common'; // For *ngIf
import { ProgressBarModule } from 'primeng/progressbar';//progressbar
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';//breadcrumb
interface sortby {
  name: string;
}//dropdown
@Component({
  selector: 'app-blog-list',
  imports: [BreadcrumbComponent,BreadcrumbModule,DropdownModule,FormsModule,ButtonModule,CardModule,PaginatorModule,CommonModule,ProgressBarModule],
  templateUrl: './blog-list.component.html',
  standalone: true,
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  items: MenuItem[] | undefined;//breadcrumb
  Sort: sortby[] | undefined;//dropdown
  selectedCity: sortby | undefined;//dropdown
    currentPage: number = 1;
    onPageChange(event: any) {
      this.currentPage = event.page + 1; // PrimeNG pagination is zero-based
    }
    breadcrumbItems: MenuItem[] = [
      { label: 'APPS', },
      { label: 'BLOG', },
      { label: 'LIST',  }
    ];
  ngOnInit() {
    this.items = [{ label: 'APPS' }, { label: 'BLOG' }, { label: 'LIST' }];//breadcrumb
    this.Sort = [
      { name: 'Most Shared' },
      { name: 'Most Commented'},
  ];//dropdown
  }
}
