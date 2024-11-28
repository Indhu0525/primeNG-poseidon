import { Component , ViewEncapsulation  } from '@angular/core';
import { ButtonModule } from 'primeng/button';//button
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-header',
  imports: [ButtonModule,IconFieldModule,InputTextModule,InputIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {

}
