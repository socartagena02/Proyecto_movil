import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ventana5Page } from './ventana5.page';

const routes: Routes = [
  {
    path: '',
    component: Ventana5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ventana5PageRoutingModule {}
