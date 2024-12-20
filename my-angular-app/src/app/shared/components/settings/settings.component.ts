import { Component,ViewEncapsulation  } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChipsModule } from 'primeng/chips';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-settings',
  imports: [BadgeModule,OverlayPanelModule,InputGroupModule,InputGroupAddonModule,ButtonModule,InputTextModule,ChipsModule,CommonModule,],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SettingsComponent {

}
