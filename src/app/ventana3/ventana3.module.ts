import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ventana3PageRoutingModule } from './ventana3-routing.module';

import { Ventana3Page } from './ventana3.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ventana3PageRoutingModule
  ],
  declarations: [Ventana3Page]
})
export class Ventana3PageModule {}
