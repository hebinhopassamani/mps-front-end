import {Routes} from '@angular/router';
import {WebLayoutComponent} from '@website/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'pages'},
      {path: 'pages', loadChildren: () => import('@website/pages/routes')},
      {path: '**', redirectTo: 'notfound'},
    ],
  },
];
export default routes;
