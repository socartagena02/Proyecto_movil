import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,  } from '@angular/forms';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public FormBuilder: FormBuilder,
    public alertController: AlertController) {
    this.formularioRegistro = this.FormBuilder.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required),
      'Nickname': new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }
  //valida si esta completado el registro
  async guardar() {
    var f = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'datos incompletos',
        message: 'tienes que completar el formulario porfavor',
        buttons: ['aceptar'],
      });

      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
      apellido: f.apellido,
      contraseña: f.contraseña,
      Nickname: f.Nickname
      
    }

    localStorage.setItem('usuario', JSON.stringify('usuario'))


  }
}
