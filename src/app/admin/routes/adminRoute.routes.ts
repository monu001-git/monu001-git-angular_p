import { Routes } from '@angular/router';
import { adminPages } from '../pages/routes/adminPages.routes';

export const adminRoutes: Routes = [


    {
        path: '',
        loadComponent: () =>
          import('../admin.component').then((comp) => comp.AdminComponent),
        children: adminPages,
      },

];
