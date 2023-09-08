import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ventana4PageRoutingModule } from './ventana4-routing.module';

import { Ventana4Page } from './ventana4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ventana4PageRoutingModule
  ],
  declarations: [Ventana4Page]
})
export class Ventana4PageModule {}
