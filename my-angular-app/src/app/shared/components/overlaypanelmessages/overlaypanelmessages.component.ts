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
  selector: 'app-overlaypanelmessages',
  imports: [OverlayPanelModule,BadgeModule,CommonModule,InputTextModule,ChipsModule,ButtonModule,InputGroupAddonModule,InputGroupModule],
  templateUrl: './overlaypanelmessages.component.html',
  styleUrl: './overlaypanelmessages.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class OverlaypanelmessagesComponent {
  members = [
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
];
}
