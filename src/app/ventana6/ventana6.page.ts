import { Component, OnInit } from '@angular/core';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { state, style, trigger } from '@angular/animations';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { map, take, debounceTime } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseService } from '../services/firebase.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-ventana6',
  templateUrl: './ventana6.page.html',
  styleUrls: ['./ventana6.page.scss'],
})
export class Ventana6Page implements OnInit {

  constructor(private alertController: AlertController,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    public fb: FormBuilder,
    private router: Router,
    private authService: FirebaseService) { 
      this.fb.group({
        'email': ["", Validators.required, Validators.email],
        'nombre': new FormControl("", Validators.required),
        'apellido': new FormControl("", Validators.required),
        'Nickname': new FormControl("", Validators.required),
        'contraseña': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
        'repetirPassword': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
        'usuario': ["", [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$')]],
      });
    }

  ngOnInit() {
  }

}
