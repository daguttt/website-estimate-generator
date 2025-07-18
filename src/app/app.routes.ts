import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'estimate',
    loadChildren: () =>
      import('@/features/create-estimate').then((m) => m.estimatesRoutes),
  },
  {
    path: '**',
    redirectTo: 'estimate',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'estimate',
    pathMatch: 'full',
  },
];
