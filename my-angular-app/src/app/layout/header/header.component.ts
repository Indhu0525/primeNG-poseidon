import { Component , ViewEncapsulation  } from '@angular/core';
import { ButtonModule } from 'primeng/button';//button
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';//notification icon header
import { AvatarModule } from 'primeng/avatar'; //heade avatar
import { AvatarGroupModule } from 'primeng/avatargroup';
@Component({
  selector: 'app-header',
  imports: [AvatarGroupModule,ButtonModule,IconFieldModule,InputTextModule,AvatarModule,InputIconModule,BadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {

}
