import { Component,ViewChild  } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  imports: [StyleClassModule,AvatarModule,RippleModule,ButtonModule,SidebarModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
}


  sidebarVisible: boolean = false;
  isFavoritesVisible = false;
  isReportsVisible = false;
  isBlogsVisible = false;

  toggleDropdown(section: string) {
    if (section === 'favorites') {
      this.isFavoritesVisible = !this.isFavoritesVisible;
    } else if (section === 'reports') {
      this.isReportsVisible = !this.isReportsVisible;
    }
    else if (section === 'blogs') {
      this.isBlogsVisible = !this.isBlogsVisible;
    }
  }
}
