import { state, style, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  inicioSesion: any;

  constructor(private alertController: AlertController,
    public fb : FormBuilder) {
    this.inicioSesion = this.fb.group({
      'contraseña': new FormControl("", Validators.required),
      'Nickname' : new FormControl ("", Validators.required),
    });
  }

  async confirmar() {
    return;
  } 
}