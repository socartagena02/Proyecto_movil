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
  
    if(this.inicioSesion.invalid){
      const alert = await this.alertController.create({
        header: 'datos incompletos',
        message: 'Ingrese datos correspondidos',
        buttons: ['OK'],
      });
  
      await alert.present();
    } else { 
      const complete = await this.alertController.create({
        header: 'Inicie sesion porfavor',
          buttons:  [
            {
              text: 'OK',
              handler: () => {
                this.router.navigate(['/ventana3']);
              }
            }
          ]
       });
     await complete.present();
  }
 }
 validarContrasena(contrasena: string): boolean {
  //const caracteresEspeciales = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-=|/]/;
  const longitudMinima = 8;
  const longitudMaxima = 12;

    if (contrasena.length < longitudMinima) {
      return false;
    }

    //if (!caracteresEspeciales.test(contrasena)) {
    //  return false;
    //}
    return true; 
  }
}