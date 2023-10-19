import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';



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
      'nombre': new FormControl ("", Validators.required),
      'apellido': new FormControl ("", Validators.required),
      'Nickname' : new FormControl ("", Validators.required),
      'contraseña': new FormControl("", Validators.required),
      'repetirPassword': new FormControl ("", Validators.required)
    });
  }
  
  ngOnInit() {
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

      } 

      var usuario = {
        nombre: formulario.nombre,
        apellido:formulario.apellido,
        Nickname:formulario.Nickname,
        contraseña:formulario.contraseña,
        repetirpassword:formulario.repetirPassword
      }

      localStorage.setItem('usuario', JSON.stringify(usuario))

    }
  
  // registrarUsuario() {}
  
  // registrar( ) {
  //     const password = this.formularioRegistro.value.contraseña;
  //     const repetirPassword = this.formularioRegistro.value.repetirPassword;
  //     const email = this.formularioRegistro.value.correo; 

  //     if (password !== repetirPassword){
  //       const alert = this.alertController.create({
  //         header: 'La contraseña no coincide',
  //         message: 'Reintente nuevamente.',
  //         buttons: ['ACEPTAR'],
  //       });
  //       alert.then(b => b.present());
  //       return;
  //     }
  

  //   this.afAuth.createUserWithEmailAndPassword(password, email).then((user) =>{
  //     console.log('Usuario registrado con exito',user);
      
  //   }).catch((error) =>{
  //     console.log('Intente con otro usuario', error);

  //     return error;
  //   })
  // }
}