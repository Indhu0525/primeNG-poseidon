import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';



@Component({
  selector: 'app-createuser',
  imports: [BreadcrumbModule,InputTextModule,FormsModule,InputTextareaModule,ToastModule,FileUploadModule   ],
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.scss',
  providers: [MessageService]
  
})
export class CreateuserComponent {
  items: MenuItem[] | undefined;//breadcrumb

  home: MenuItem | undefined;//breadcrumb
  value: string | undefined;//form


  ngOnInit() {
      this.items = [
          { label: 'USER MANAGEMENT' }, 
          { label: 'CREATE' }, 
      ];
  }

  
}
