import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertButton, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  formularioRegistro: FormGroup;
  
  constructor(public fb: FormBuilder) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required),
      'Nickname' : new FormControl ("", Validators.required),
      'correo' : new FormControl ("", Validators.required)
    });
  }

  ngOnInit() {
  }
//  @Component({
//    selector: 'app-register',
//    templateUrl: 'register.page.html',
//    styleUrls: ['register.page.scss'],
//  })
//  export class RegisterPage {
//    constructor(public alertController: AlertController) {
  
//    async presentAlert() {
//      const alert = await this.alertController.create({
//        header: 'Alerta',
//        subHeader: 'Mensaje importante',
//        message: 'Ingrese los datos correspondientes',
//        buttons: ['Aceptar'],
//      });
  
//      await alert.present();
//    }
//   }
  }