import { Component,ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
@Component({
  selector: 'app-footer',
  imports: [ButtonModule,AvatarModule,AvatarGroupModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class FooterComponent {

}
