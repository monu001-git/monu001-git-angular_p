import { Routes } from '@angular/router';

export const adminPages: Routes = [


    {
        path: 'user',
        loadComponent: () =>
            import('../user/user.component').then((comp) => comp.UserComponent),
    },
    {
        path: 'add-user',
        loadComponent: () =>
            import('../user/add-user/add-user.component').then((comp) => comp.AddUserComponent),
    },
    {
        path: 'update-user/:id',
        loadComponent: () =>
            import('../user/add-user/add-user.component').then((comp) => comp.AddUserComponent),
    },
    
   
    {
        path: 'content',
        loadComponent: () =>
            import('../content/content.component').then((comp) => comp.ContentComponent),
    },
    {
        path: 'add-content',
        loadComponent: () =>
            import('../content/add-content/add-content.component').then((comp) => comp.AddContentComponent),
    },
    {
        path: 'menu',
        loadComponent: () =>
            import('../menu/menu.component').then((comp) => comp.MenuComponent),
    },
    {
        path: 'add-menu',
        loadComponent: () =>
            import('../menu/add-menu/add-menu.component').then((comp) => comp.AddMenuComponent),
    },
];
