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
      'Nickname' : new FormControl ("", Validators.required),
      'contraseña': new FormControl("", Validators.required),
    });
  }
  ngOnInit(){

  }

  async confirmar() {
    if(this.inicioSesion.invalid){
      const alert = await this.alertController.create({
        header: 'datos incompletos',
        message: 'tienes que completar el formulario porfavor',
        buttons: ['OK'],
      });
  
      await alert.present();
      return;
    } else { //Parece que ignora este else cuando se hace el ejemplo
      const alert = await this.alertController.create({
        header: 'datos completados',
        message: 'Vuelve al inicio para iniciar sesion',
        buttons: ['OK'],
      })

    await alert.present();
    return;
   } 
 }
}