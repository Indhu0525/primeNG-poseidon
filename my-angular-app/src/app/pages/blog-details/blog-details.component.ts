import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';//breadcrumb
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';//button
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-blog-details',
  imports: [BreadcrumbComponent,CommonModule,ButtonModule,FormsModule,InputGroupAddonModule,InputGroupModule,InputTextModule,InputTextareaModule 
   ],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss',
  standalone: true,
})
export class BlogDetailsComponent {
  value!: string;// for text area
  breadcrumbItems: MenuItem[] = [
    { label: 'APPS', },
    { label: 'BLOG', },
    { label: 'DETAILS',  }
  ];


}
