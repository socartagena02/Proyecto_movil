import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-config-perfil',
  templateUrl: './config-perfil.page.html',
  styleUrls: ['./config-perfil.page.scss'],
})
export class ConfigPerfilPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public FormBuilder: FormBuilder,
    public alertController: AlertController,
    private afAuth: AngularFireAuth,
    private authService: FirebaseService) {
    this.formularioRegistro = this.FormBuilder.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'Nickname': new FormControl("", Validators.required),
      'usuario': ["", [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$')]],
      'email': ["", Validators.required, Validators.email],
      'fono':["", Validators.required, Validators.email],
    });
  }
  ngOnInit() {
  }

}
