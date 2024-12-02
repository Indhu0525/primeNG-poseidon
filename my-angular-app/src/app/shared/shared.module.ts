import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlaypanelComponent } from './components/overlaypanel/overlaypanel.component';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { ChipsModule } from 'primeng/chips';
import { OverlaypanelmessagesComponent } from '../shared/components/overlaypanelmessages/overlaypanelmessages.component';
import { SettingsComponent } from '../shared/components/settings/settings.component';
@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,ButtonModule,OverlayPanelModule,InputTextModule,InputGroupModule,ChipsModule,OverlaypanelComponent,OverlaypanelmessagesComponent,SettingsComponent
  ],
  exports: [
    OverlaypanelComponent // Export it so other modules can use it
  ]
})
export class SharedModule { }

