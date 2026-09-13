import {Routes} from '@angular/router';
import {MpsLayoutComponent} from '@morphus/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: MpsLayoutComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'pages'},
      {path: 'pages', loadChildren: () => import('@morphus/pages/routes')},
      {path: '**', redirectTo: 'notfound'},
    ],
  },
];
export default routes;
