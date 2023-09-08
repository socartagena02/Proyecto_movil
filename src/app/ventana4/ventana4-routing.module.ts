import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ventana4Page } from './ventana4.page';

const routes: Routes = [
  {
    path: '',
    component: Ventana4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ventana4PageRoutingModule {}
