import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('././components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'perfil/:userName',
    loadChildren: () =>
      import('././components/perfil/perfil.module').then((m) => m.PerfilModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
