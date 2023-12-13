import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formularioRegistro: FormGroup;


  constructor(public FormBuilder: FormBuilder,
    public alertController: AlertController,
    private afAuth: AngularFireAuth,
    private authService: FirebaseService) {
    this.formularioRegistro = this.FormBuilder.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'contraseña': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      'repetirPassword': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      'usuario': ["", [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$')]],
      'email': new FormControl ("", Validators.required),
      'fono': new FormControl("", Validators.required)
    });
  }

  loginFuncion(){
    var nombre = this.formularioRegistro.get('nombre')?.value;
    var apellido = this.formularioRegistro.get('apellido')?.value;
    var email = this.formularioRegistro.get('email')?.value;
    var contraseña = this.formularioRegistro.get('contraseña')?.value;
    var repetirPassword = this.formularioRegistro.get('repetirPassword')?.value;
    var fono = this.formularioRegistro.get('fono')?.value;
    
  }


  ngOnInit() {
  }
 
  async guardar() {
    
    var formulario = this.formularioRegistro.value;
    let usuario = {
      nombre: formulario.nombre,
      apellido: formulario.apellido,
      correo: formulario.correo,
      contraseña: formulario.contraseña,
      repetirpassword: formulario.repetirPassword,
      fono: formulario.fono
    }
    
    if (this.formularioRegistro.valid) {

      const alert = await this.alertController.create({
        header: 'datos completados',
        message: 'Vuelve a iniciar sesion',
        buttons: ['OK'],
      });
      var guardar = this.formularioRegistro.value;
      alert.present();
      console.log(guardar);

    } else {
      const alert = await this.alertController.create({
        header: 'datos incompletos',
        message: 'tienes que completar el formulario porfavor',
        buttons: ['OK'],
      });
      alert.present();

    }
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }
  saveData(){
    console.log(this.formularioRegistro.value);
  }
  
  public contrasenasIguales():  boolean {
    const contraseñaControl = this.formularioRegistro.get('contraseña');
    const repetirContraseñaControl = this.formularioRegistro.get('repetirPassword');
    return(
      this.formularioRegistro.hasError('noSonIguales') &&
      contraseñaControl?.dirty === true &&
      repetirContraseñaControl?.dirty === true
    );
  }
  signUp(email: string, contrasena: string){
    this.authService.signUpWithEmailAndPassword(email,contrasena);
  }
}