import { Routes } from '@angular/router';

export const frontRoutes: Routes = [

    {
        path: '',
        loadComponent: () =>
            import('../front.component').then(
                (comp) => comp.FrontComponent
            ),
    },
    {
        path: 'about-us',
        loadComponent: () =>
            import('../pages/about-us/about-us.component').then(
                (comp) => comp.AboutUsComponent
            ),
    },
    {
        path: 'contact-us',
        loadComponent: () =>
            import('../pages/contact-us/contact-us.component').then(
                (comp) => comp.ContactUsComponent
            ),
    },
    {
        path: 'project',
        loadComponent: () =>
            import('../pages/project/project.component').then(
                (comp) => comp.ProjectComponent
            ),
    },
    {
        path: 'service',
        loadComponent: () =>
            import('../pages/services/services.component').then(
                (comp) => comp.ServicesComponent
            ),
    },
    {
        path: 'team',
        loadComponent: () =>
            import('../pages/team/team.component').then(
                (comp) => comp.TeamComponent
            ),
    },


];
