import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ventana6Page } from './ventana6.page';

const routes: Routes = [
  {
    path: '',
    component: Ventana6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ventana6PageRoutingModule {}
