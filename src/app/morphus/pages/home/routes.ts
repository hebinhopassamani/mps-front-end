import { Routes } from '@angular/router';
import { MpsHomeComponent } from '@morphus/pages/home/home.component';

export default [
  { path: '', component: MpsHomeComponent },
  { path: '**', redirectTo: '/notfound' },
] as Routes;
