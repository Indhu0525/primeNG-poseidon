import { Component, OnInit  } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';//breadcrumb
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { FileSelectEvent } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule,FormBuilder,Validators  } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ChipModule } from 'primeng/chip';
@Component({
  selector: 'app-blog-edit',
  standalone: true,
  imports: [BreadcrumbComponent,FileUploadModule, ChipModule,ButtonModule, BadgeModule, ProgressBarModule, ToastModule, HttpClientModule, CommonModule,InputTextModule ,FormsModule,ReactiveFormsModule, EditorModule],
  templateUrl: './blog-edit.component.html',
  styleUrl: './blog-edit.component.scss', 
  providers: [MessageService]
})
export class BlogEditComponent {
  breadcrumbItems: MenuItem[] = [
    { label: 'APPS', },
    { label: 'BLOG', },
    { label: 'EDIT',  }
  ];//breadcrumb
  //fileupload
  files: File[] = [];

  totalSize : number = 0;

  totalSizePercent : number = 0;
index: any;

  constructor(private config: PrimeNGConfig, private messageService: MessageService, private fb: FormBuilder) {
    this.form = this.fb.group({
      text: ['', Validators.required],  // Ensure form control is defined
    });
  }

  choose(event: any, callback: () => void) {
      callback();
  }

  onRemoveTemplatingFile(event: any, file: { size: number; }, removeFileCallback: (arg0: any, arg1: any) => void, index: any) {
      removeFileCallback(event, index);
      this.totalSize -= parseInt(this.formatSize(file.size));
      this.totalSizePercent = this.totalSize / 10;
  }

  onClearTemplatingUpload(clear: () => void) {
      clear();
      this.totalSize = 0;
      this.totalSizePercent = 0;
  }

  onTemplatedUpload() {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
  }

  onSelectedFiles(event: FileSelectEvent) {
    this.files = event.currentFiles;
   
    this.totalSizePercent = (this.totalSize / 1000000) * 100; // Adjust to percentage
}

  uploadEvent(callback: () => void) {
      callback();
  }

  formatSize(bytes: number): string {
    const k = 1024;
    const dm = 3;
    const sizes = this.config.translation?.fileSizeTypes ?? ['Bytes', 'KB', 'MB', 'GB'];
    
    if (bytes === 0) {
        return `0 ${sizes[0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
}
  //fileupload
  value: string | undefined;
//editor 
  formGroup!: FormGroup;

    ngOnInit() {
      this.formGroup = new FormGroup({
        text: new FormControl()
    });
  }
//editor
form: FormGroup;


}