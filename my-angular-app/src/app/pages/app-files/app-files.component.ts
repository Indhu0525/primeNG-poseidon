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


@Component({
  selector: 'app-app-files',
  imports: [BreadcrumbModule,BreadcrumbComponent,OverlayPanelModule,CommonModule,ChipsModule,InputTextModule,ButtonModule,InputGroupAddonModule,InputGroupModule,MeterGroupModule,KnobModule,FormsModule],
  templateUrl: './app-files.component.html',
  styleUrl: './app-files.component.scss'
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
value: number = 50;//knob
}
