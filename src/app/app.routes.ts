import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'AshBike — Fall in Love with Biking',
  },
  {
    path: 'tech',
    loadComponent: () => import('./pages/tech/tech').then((m) => m.Tech),
    title: 'Tech & Apps — AshBike',
  },
  {
    path: 'hardware',
    loadComponent: () => import('./pages/hardware/hardware').then((m) => m.Hardware),
    title: 'Hardware & Concepts — AshBike',
  },
  {
    path: 'cities',
    loadComponent: () => import('./pages/cities/cities').then((m) => m.Cities),
    title: 'Cities & Sustainability — AshBike',
  },
  {
    path: 'info',
    loadComponent: () => import('./pages/info/info').then((m) => m.Info),
    title: 'About, Contact & Legal — AshBike',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
