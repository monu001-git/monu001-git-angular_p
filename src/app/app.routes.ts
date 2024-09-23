import { Routes } from '@angular/router';
import { authGuard } from './Auth/gaurd/auth.guard';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('./front/route/frontRoutes.routes').then((route) => route.frontRoutes),
    },
    {
        path: 'admin',
        loadChildren: () => import('../app/admin/routes/adminRoute.routes').then((route) => route.adminRoutes),
        canActivate: [authGuard],
    },
    {
        path: 'loader',
        loadComponent: () => import('../app/loader/loader.component').then((comp) => comp.LoaderComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('../app/Auth/login/login.component').then((comp) => comp.LoginComponent)
    },
    {
        path: '**',
        loadComponent: () => import('../app/error/error.component').then((comp) => comp.ErrorComponent)
    }

];
