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
  async guardar() {
    this.formularioRegistro.value;

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'datos incompletos',
        message: 'tienes que completar el formulario porfavor',
        buttons: ['OK'],
      });

      await alert.present();
      return;
      
    } else if (this.formularioRegistro.valid) { //Parece que ignora este else cuando se hace el ejemplo
      const alert = await this.alertController.create({
        header: 'datos completadoss',
        message: 'Vuelve al inicio para iniciar sesion',
        buttons: ['OK'],
      });
    } else {
      const alert = await this.alertController.create({
        header: 'datos incompletos',
        message: 'complete el formulario porfavor',
        buttons: ['ok']
      });
    }

    //El codígo valida el correo que este correcto
    class RegisterPage {
      Correo: string = 'correo@ejemplo.com';
      formularioRegistro: any;
      constructor() {
        this.Correo = 'Correo';
      }

      validarCorreo(correo: String): Boolean {
        const correoPrimitivo = correo.toString();
        const expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(?:\.es)?$/;
        return expresionRegular.test(correoPrimitivo);
      }

      //Aqui cuando el campo del correo esta vacio
      correoVacio(correo: string): boolean {
        return correo.trim() === "";
      }
      campoCorreoVacio() {
        const correoVacio = this.formularioRegistro.invalid('correo').null; //formularioRegistro al parecer no esta definida mientras que lo esta en la linea 14
        if (this.correoVacio(this.Correo)) {
          console.log('El campo esta vacio');
        } else {
          return;
        }
      }

      validarYMostrarCorreo() {
        if (this.Correo) {
          if (this.validarCorreo(this.Correo)) {
            console.log('Correo electrónico válido');
          }
        } else {
          console.log('Campo de correo electrónico vacío');
        }
        const registerPage = new RegisterPage();
        registerPage.validarYMostrarCorreo();
      }
    }
  }
}
