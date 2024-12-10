import { Component,ViewChild  } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [StyleClassModule,AvatarModule,RippleModule,ButtonModule,SidebarModule,CommonModule,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
})
export class SidebarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
}
sidebarVisible: boolean = false;

  // toggleSidebar() {
  //   this.sidebarVisible = !this.sidebarVisible;
  // }
  isFavoritesVisible = false;
  isReportsVisible = false;
  isBlogsVisible = false;
  isAuthVisible = false;
  isSubmenu1Visible = false;
  isSubmenu11Visible = false;
  isSubmenu12Visible = false;
  isSubmenu2Visible = false;
  isSubmenu21Visible = false;
  isSubmenu22Visible = false;

  toggleDropdown(section: string) {
    if (section === 'favorites') {
      this.isFavoritesVisible = !this.isFavoritesVisible;
    } else if (section === 'reports') {
      this.isReportsVisible = !this.isReportsVisible;
    }
    else if (section === 'blogs') {
      this.isBlogsVisible = !this.isBlogsVisible;
    } else if (section === 'Auth') {
      this.isAuthVisible = !this.isAuthVisible;
    }else if (section === 'Submenu1') {
      this.isSubmenu1Visible = !this.isSubmenu1Visible;
    }else if (section === 'Submenu1.1') {
      this. isSubmenu11Visible = !this. isSubmenu11Visible;
    }else if (section === 'Submenu1.2') {
      this.isSubmenu12Visible = !this.isSubmenu12Visible;
    }else if (section === 'Submenu2') {
      this.isSubmenu2Visible = !this.isSubmenu2Visible;
    }else if (section === 'Submenu2.1') {
      this. isSubmenu21Visible = !this. isSubmenu21Visible;
    }else if (section === 'Submenu2.2') {
      this.isSubmenu22Visible = !this.isSubmenu22Visible;
    }
  }

  isVisible = false;

  constructor(private sidebarService: SidebarService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sidebarService.isVisible$.subscribe((visible) => {
      this.isVisible = visible;
    });
    
  }
  navigateTo(route: string): void {
    this.router.navigate([route]); // Navigate to the specified route
  }
}
