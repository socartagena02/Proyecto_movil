import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ventana7Page } from './ventana7.page';

const routes: Routes = [
  {
    path: '',
    component: Ventana7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ventana7PageRoutingModule {}
