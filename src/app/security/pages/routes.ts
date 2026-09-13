import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('@security/pages/home/routes') },
  { path: '**', redirectTo: 'notfound' },
];
export default routes;
