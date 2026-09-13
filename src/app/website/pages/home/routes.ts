import { Routes } from '@angular/router';
import { WebHomeComponent } from '@website/pages/home/home.component';

export default [
  { path: '', component: WebHomeComponent },
  { path: '**', redirectTo: 'notfound' },
] as Routes;
