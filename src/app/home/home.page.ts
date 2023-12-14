import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { state, style, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { map, take, debounceTime } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseService } from '../services/firebase.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  inicioSesion: FormGroup;
  email: string;
  contrasena: string;

  constructor(private alertController: AlertController,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    public fb: FormBuilder,
    private router: Router,
    private authService: FirebaseService) {

    this.inicioSesion = this.fb.group({
      'email': ["", [Validators.required, Validators.email]],
      'contrasena': ["", [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
    });
  }

  logIn(email : string, contrasena : string) {
    this.authService.logInWithEmailAndPassword(email, contrasena)
  }
    



  ngOnInit() {

  }
}



