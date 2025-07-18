import { Routes } from '@angular/router';
import { CreateEstimatePage } from './create-estimate.page';

export const routes: Routes = [
  {
    path: 'new',
    component: CreateEstimatePage,
  },
  {
    path: '**',
    redirectTo: 'new',
    pathMatch: 'full',
  },
];
