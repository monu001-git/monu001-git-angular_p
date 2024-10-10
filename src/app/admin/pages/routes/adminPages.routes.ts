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
        path: 'update-user',
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


    {
        path: 'banner',
        loadComponent: () =>
            import('../banner/banner.component').then((comp) => comp.BannerComponent),
    },
    {
        path: 'add-banner',
        loadComponent: () =>
            import('../banner/add-banner/add-banner.component').then((comp) => comp.AddBannerComponent),
    },
    {
        path: 'org',
        loadComponent: () =>
            import('../org/org.component').then((comp) => comp.OrgComponent),
    },
    {
        path: 'add-org',
        loadComponent: () =>
            import('../org/add-org/add-org.component').then((comp) => comp.AddOrgComponent),
    },

    {
        path: 'mail',
        loadComponent: () =>
            import('../../issue-mail/issue-mail.component').then((comp) => comp.IssueMailComponent),

    },
    {
        path: 'add-mail',
        loadComponent: () =>
            import('../../issue-mail/add-issue-mail/add-issue-mail.component').then((comp) => comp.AddIssueMailComponent),

    }
];
