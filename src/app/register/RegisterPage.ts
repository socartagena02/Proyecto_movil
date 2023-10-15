import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,  } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { error } from 'console';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public FormBuilder: FormBuilder,
    public alertController: AlertController, 
    private afAuth : AngularFireAuth) {
    this.formularioRegistro = this.FormBuilder.group({
      'nombre': ['', Validators.required],
      'apellido': ['', Validators.required],
      'contraseña': ['', Validators.required],
      'Nickname': ['', Validators.required],
      'repetirPassword': ['', Validators.required],
    });
  }
  
  ngOnInit(): void {
  }
  async guardar() {
    var formulario = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'datos incompletos',
        message: 'tienes que completar el formulario porfavor',
        buttons: ['OK'],
      });

      await alert.present();
      return;

    } else if (this.formularioRegistro.valid) { 
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

      var usuario = {
        nombre: formulario.nombre,
        apellido: formulario.apellido,
        contraseña: formulario.contraseña,
        Nickname: formulario.Nickname
      }
      localStorage.setItem('usuario', JSON.stringify(usuario))
    }
  }
  registrarUsuario() {}
  
  registrar( ) {
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.password;
    const email= this.registrarUsuario.value.password;

    this.afAuth.createUserWithEmailAndPassword(password, email).then((user) =>{
      console.log(user);
      
    }).catch((error) =>{
      console.log(error);
    })
  }
}