import { Routes } from '@angular/router';
import { CreateuserComponent } from './pages/createuser/createuser.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'createUser', component: CreateuserComponent },
];
