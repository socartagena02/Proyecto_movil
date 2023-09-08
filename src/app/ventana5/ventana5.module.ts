import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ventana5PageRoutingModule } from './ventana5-routing.module';

import { Ventana5Page } from './ventana5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ventana5PageRoutingModule
  ],
  declarations: [Ventana5Page]
})
export class Ventana5PageModule {}
