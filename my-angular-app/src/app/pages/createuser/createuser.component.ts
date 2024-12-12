import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';//BREADCRUMB




interface Country {
  name: string;
  code: string;
  flag: string;
}

@Component({
  selector: 'app-createuser',
  standalone: true,
  imports: [
    BreadcrumbModule,
    BreadcrumbComponent,
    ButtonModule,
    InputTextModule,
    FormsModule,
    InputTextareaModule,
    ToastModule,
    FileUploadModule,
    DropdownModule,
    CommonModule,
    InputGroupModule,
    InputNumberModule,
    InputGroupAddonModule,
    
  ],
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss'],
  providers: [MessageService],
})
export class CreateuserComponent {
  items: MenuItem[] | undefined;//breadcrumb
  home: MenuItem | undefined;
  value: string | undefined;
  text1: string | undefined;

  text2: string | undefined;

  number: string | undefined;
  countries: Country[] = [
    { name: 'Australia', code: 'AU', flag: 'https://flagcdn.com/w320/au.png' },
    { name: 'Brazil', code: 'BR', flag: 'https://flagcdn.com/w320/br.png' },
    { name: 'China', code: 'CN', flag: 'https://flagcdn.com/w320/cn.png' },
    { name: 'Egypt', code: 'EG', flag: 'https://flagcdn.com/w320/eg.png' },
    { name: 'France', code: 'FR', flag: 'https://flagcdn.com/w320/fr.png' },
  ];

  selectedCountry: Country | null = null;


  text4: string | undefined;
  breadcrumbItems: MenuItem[] = [
    { label: 'USER MANAGEMENT', },
    { label: 'CREATE', },
  ];

  
}
