import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes this service available throughout the application
})
export class SidebarService {
  private sidebarVisible = new BehaviorSubject<boolean>(false);
  isVisible$ = this.sidebarVisible.asObservable();

  toggleSidebar() {
    this.sidebarVisible.next(!this.sidebarVisible.value);
  }

  closeSidebar() {
    this.sidebarVisible.next(false);
  }

  openSidebar() {
    this.sidebarVisible.next(true);
  }
}
