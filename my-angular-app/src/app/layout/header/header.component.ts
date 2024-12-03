import { Component , ViewEncapsulation  } from '@angular/core';
import { ButtonModule } from 'primeng/button';//button
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';//notification icon header
import { AvatarModule } from 'primeng/avatar'; //heade avatar
import { AvatarGroupModule } from 'primeng/avatargroup';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ChipsModule } from 'primeng/chips';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { OverlaypanelmessagesComponent } from "../../shared/components/overlaypanelmessages/overlaypanelmessages.component";
import { SettingsComponent } from "../../shared/components/settings/settings.component";
import { UserComponent } from "../../shared/components/user/user.component";
import { LayoutRightpanelComponent } from '../../shared/components/layout-rightpanel/layout-rightpanel.component';

@Component({
  imports: [LayoutRightpanelComponent,SettingsComponent,InputGroupModule, InputGroupAddonModule, OverlaypanelmessagesComponent,ChipsModule, CommonModule, AvatarGroupModule, ButtonModule, IconFieldModule, InputTextModule, AvatarModule, InputIconModule, BadgeModule, OverlayPanelModule, SharedModule,UserComponent],
  templateUrl: './header.component.html',
  selector: 'app-header',
  standalone: true,
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {

}
