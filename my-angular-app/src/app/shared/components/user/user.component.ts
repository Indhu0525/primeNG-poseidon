import { Component,ViewEncapsulation  } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChipsModule } from 'primeng/chips';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar'; //heade avatar
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-user',
  imports: [BadgeModule,OverlayPanelModule,InputGroupModule,InputGroupAddonModule,ButtonModule,InputTextModule,ChipsModule,CommonModule,AvatarModule,AvatarGroupModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class UserComponent {

}
