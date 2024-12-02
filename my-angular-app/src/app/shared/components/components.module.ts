import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlaypanelComponent } from './overlaypanel/overlaypanel.component';
import { OverlaypanelmessagesComponent } from './overlaypanelmessages/overlaypanelmessages.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,OverlaypanelComponent,OverlaypanelmessagesComponent,SettingsComponent
  ]
})
export class ComponentsModule { }
