import { Routes } from '@angular/router';
import { CreateuserComponent } from './pages/createuser/createuser.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { BlogEditComponent } from './pages/blog-edit/blog-edit.component';
import { AppFilesComponent } from './pages/app-files/app-files.component';
import { KanbanComponent } from './pages/kanban/kanban.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'createUser', component: CreateuserComponent },
    { path: 'bloglist', component: BlogListComponent },
    { path: 'blogdetails', component: BlogDetailsComponent },
    { path: 'blogedit', component: BlogEditComponent },
    { path: 'app-files', component: AppFilesComponent },
    { path: 'app-kanban', component: KanbanComponent },
];
