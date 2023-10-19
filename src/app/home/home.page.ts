import { state, style, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { toastrService } from 'ngx Toastr';
//import { FirebaseCodeErrorService } from 'src/app/services/Firebase code error.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  inicioSesion: FormGroup;

  constructor(private alertController: AlertController,
    private afAuth : AngularFireAuth,
//    private toastr : toastrService,
//    private fireBaseError: FirebaseCodeErrorService, 
    public fb : FormBuilder) {

    this.inicioSesion = this.fb.group({
      'Nickname' : new FormControl ("", Validators.required),
      'contraseña': new FormControl("", Validators.required),
    });
  }
  ngOnInit():void{

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
      
    // } else { 
    //   const complete = await this.alertController.create({
    //      header: 'datos completados',
    //      buttons: ['OK'],
    //    });

    //  await complete.present();
    //  return;
    // } 
    
  }
 }
}