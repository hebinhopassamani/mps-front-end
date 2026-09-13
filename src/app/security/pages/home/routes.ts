import {Routes} from '@angular/router';
import {SecHomeComponent} from '@security/pages/home/home.component';

export default [
  {path: '', component: SecHomeComponent},
  {path: '**', redirectTo: '/notfound'},
] as Routes;
