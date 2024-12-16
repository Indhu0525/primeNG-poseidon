import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';//breadcrumb
import { MenuItem } from 'primeng/api';//breadcrumb
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';//breadcrumb
import { OverlayPanelModule } from 'primeng/overlaypanel';//overlay
import { InputGroupModule } from 'primeng/inputgroup'; //overlay
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';//overlay
import { ButtonModule } from 'primeng/button';//overlay
import { InputTextModule } from 'primeng/inputtext';//overlay
import { ChipsModule } from 'primeng/chips';//overlay
import { CommonModule } from '@angular/common';//overlay
import { MeterGroupModule } from 'primeng/metergroup';//metergroup
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';//for meterround
import { MessageService } from 'primeng/api';//file upload
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload';//file upload
import { HttpClient, HttpClientModule } from '@angular/common/http';
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-app-files',
  imports: [FileUploadModule,BreadcrumbModule,BreadcrumbComponent,OverlayPanelModule,HttpClientModule ,CommonModule,ChipsModule,InputTextModule,ButtonModule,InputGroupAddonModule,InputGroupModule,MeterGroupModule,KnobModule,FormsModule],
  templateUrl: './app-files.component.html',
  standalone: true,
  styleUrl: './app-files.component.scss',
   providers: [MessageService,HttpClient]
})
export class AppFilesComponent {
  items: MenuItem[] | undefined;//breadcrumb
  breadcrumbItems: MenuItem[] = [
    { label: 'APPS', },
    { label: 'FILES', },
  ];
  value1 = [
    {value: 30, color: '#fbc02d',height:'0.3rem' }
];//metergroup
value2 = [
  {value: 30, color: '#e91e63' }
];//metergroup2
value3 = [
  {value: 30, color: '#4caf50' }
];//metergroup3
value4 = [
  {value: 30, color: '#3f51b5' }
];//metergroup4
value: number  = 70;//knob

files: File[] = [];
constructor(private messageService: MessageService) {}

onUpload(event: FileUploadEvent): void {
  // Process the uploaded files
  const uploadedFiles = event.files.map(file => file.name).join(', ');

  // Display a success message
  this.messageService.add({
    severity: 'info',
    summary: 'File Uploaded',
    detail: `Uploaded Files: ${uploadedFiles}`
  });
}

}
