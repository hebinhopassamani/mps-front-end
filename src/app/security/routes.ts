import {Routes} from '@angular/router';
import {SecLayoutComponent} from '@security/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: SecLayoutComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'pages'},
      {path: 'pages', loadChildren: () => import('@security/pages/routes')},
      {path: '**', redirectTo: 'notfound'},
    ],
  },
];
export default routes;
