import { state, style, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {map, take, debounceTime} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  inicioSesion: FormGroup;

  constructor(private alertController: AlertController,
    private afAuth : AngularFireAuth,
    private afs : AngularFirestore,
    public fb : FormBuilder,
    private router: Router) {

    this.inicioSesion = this.fb.group({
      'Nickname' : ["",Validators.required, ValidatorCustom.Nickname(this.afs)],
      'contrasena': ["",[Validators.required,  Validators.minLength(3), Validators.maxLength(12)]],
    });
  }
  ngOnInit(){

  }
  
  getEmail(){
    return this.inicioSesion.get('Nickname');
  }
  
  getPassword(){
    return this.inicioSesion.get('contrasena');
  }


}

// interface Validator <T extends FormControl>{
//   (c:T): {[error : string] : any}
// }

export class ValidatorCustom {

  static Nickname(afs : AngularFirestore){
    return (control: AbstractControl) => {
      const Nickname = control.value.toLowerCaser();

      return afs.collection('usuarios', ref =>ref.where('UserName', '==', Nickname))
      .valueChanges().pipe(debounceTime(500), take(1), map(arr => arr.length ? {usernameAvailable : false} : null),
      )
    }

  }
}