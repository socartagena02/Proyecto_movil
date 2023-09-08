import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ventana6PageRoutingModule } from './ventana6-routing.module';

import { Ventana6Page } from './ventana6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ventana6PageRoutingModule
  ],
  declarations: [Ventana6Page]
})
export class Ventana6PageModule {}
