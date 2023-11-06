import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'ventana3',
    loadChildren: () => import('./ventana3/ventana3.module').then( m => m.Ventana3PageModule)
  },
  {
    path: 'ventana4',
    loadChildren: () => import('./ventana4/ventana4.module').then( m => m.Ventana4PageModule)
  },
  {
    path: 'ventana5',
    loadChildren: () => import('./ventana5/ventana5.module').then( m => m.Ventana5PageModule)
  },
  {
    path: 'ventana6',
    loadChildren: () => import('./ventana6/ventana6.module').then( m => m.Ventana6PageModule)
  },
  {
    path: 'ventana7',
    loadChildren: () => import('./ventana7/ventana7.module').then( m => m.Ventana7PageModule)
  },  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'tarifas',
    loadChildren: () => import('./tarifas/tarifas.module').then( m => m.TarifasPageModule)
  },
  {
    path: 'firebase',
    loadChildren: () => import('./firebase/firebase.module').then( m => m.FirebasePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
