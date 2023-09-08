import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ventana7PageRoutingModule } from './ventana7-routing.module';

import { Ventana7Page } from './ventana7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ventana7PageRoutingModule
  ],
  declarations: [Ventana7Page]
})
export class Ventana7PageModule {}
