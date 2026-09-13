import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mps',
  },
  {
    path: 'security',
    pathMatch: 'full',
    redirectTo: 'sec',
  },
  {
    path: 'website',
    pathMatch: 'full',
    redirectTo: 'web',
  },
  {
    path: 'mps',
    loadChildren: () => import('@morphus/routes'),
  },
  {
    path: 'sec',
    loadChildren: () => import('@security/routes'),
  },
  {
    path: 'web',
    loadChildren: () => import('@website/routes'),
  },
  {
    path: 'notfound',
    pathMatch: 'full',
    loadComponent: () => import('@website/pages/not-found/not-found.component').then((c) => c.WebNotFoundComponent),
  },
  {
    path: '**',
    redirectTo: 'notfound',
  },
];
