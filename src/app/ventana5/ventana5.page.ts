import { Component, OnInit } from '@angular/core';
import { Ventana3Page } from 'src/app/ventana3/ventana3.page';


@Component({
  selector: 'app-ventana5',
  templateUrl: './ventana5.page.html',
  styleUrls: ['./ventana5.page.scss'],
})
export class Ventana5Page implements OnInit {

  constructor() { 

  }

  ngOnInit() : void{
  }
  isAlertOpen = false;
  public alertButtons = ['OK'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  
  botonConfirmar(){

  }
}

