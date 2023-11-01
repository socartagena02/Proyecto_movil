import { state, style, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  inicioSesion: FormGroup;

  constructor(private alertController: AlertController,
    private afAuth : AngularFireAuth,
    public fb : FormBuilder,
    private router: Router) {

    this.inicioSesion = this.fb.group({
      'Nickname' : ["",[Validators.required, Validators.pattern(/^[a-zA-Z0-9]*$/)], Validators.minLength(3), Validators.maxLength(12)],
      'contrasena': ["",[Validators.required,  Validators.minLength(3), Validators.maxLength(12)]],
    });
  }
  ngOnInit():void{

  }
  
  async confirmar() {
    var form = this.inicioSesion.value;

    var usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

    if(usuario.nombre == form.nombre && usuario.contraseña == form.contraseña){
      console.log('ingresado');

    }else{
      const alert = await this.alertController.create({
        header: 'datos incorrectos',
        message: 'intentelo de nuevo',
        buttons: ['OK'],
      });
      alert.present();
    }
    
  }
}