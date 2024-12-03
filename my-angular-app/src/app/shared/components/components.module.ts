import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlaypanelComponent } from './overlaypanel/overlaypanel.component';
import { OverlaypanelmessagesComponent } from './overlaypanelmessages/overlaypanelmessages.component';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user/user.component';
import { LayoutRightpanelComponent } from './layout-rightpanel/layout-rightpanel.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,OverlaypanelComponent,OverlaypanelmessagesComponent,SettingsComponent,UserComponent,LayoutRightpanelComponent
  ]
})
export class ComponentsModule { }
