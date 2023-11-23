import { Injectable, inject, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { User } from '../models/user.model';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  userData:any;
  
  constructor(
    private firebaseAuthenticationService: AngularFireAuth,
    private router: Router,
    afAuth: AngularFireAuth,
    private ngZone: NgZone
  ) {
    
    this.firebaseAuthenticationService.authState.subscribe((user) => {
      if(user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', 'null');
      }
    })
  }
  //Inicio de sesion con email y contraseña 
  
  signInWithEmailAndPassword(email: string, password: string, user:User) {
    return this.firebaseAuthenticationService.signInWithEmailAndPassword(email, password)
    .then((UserCredential) => {
      this.userData =  UserCredential.user
      this.observeUserState() 
    })
    .catch((error) => {
      alert(error.message);
    })
  }
  observeUserState() {
    this.firebaseAuthenticationService.authState.subscribe((userState) => {
      userState && this.ngZone.run(() => this.router.navigate([/*'dashboard'?*/]))
    })
  }
  //Registrar email y contra
  signUpWithEmailAndPassword(email: string, password: string) {
    return this.firebaseAuthenticationService.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.userData = userCredential.user
        this.observeUserState()
      })
      .catch((error) => {
        alert(error.message);
      })
  }
  //Retornar verdadero cuando el usuario inicio sesion
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }
  
  //Cerrar sesion
  logOut() {
    return this.firebaseAuthenticationService.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }
  

 //Autentificacion
  

 //acceder
 signIn(user:User){
  return signInWithEmailAndPassword(getAuth(), user.email, user.password);

 }
}
