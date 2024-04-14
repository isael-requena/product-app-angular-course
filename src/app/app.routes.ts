import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { HomeGuard } from './guards/home-guard.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [AuthGuard]},
    {path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [HomeGuard]},
    {path: '**', redirectTo: 'login', pathMatch: 'full'},
];
