import { state, style, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger ('animacionCuadro',[
      
      state('estado1', style({
        BackgroundColor: 'red'
      }))
    ]  
    )
  ]
})

export class HomePage {

  constructor() {}

}
