import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AngularFireModule } from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
//import { provideFirebaseApp } from '@angular/fire/app';
//import { getAuth } from 'firebase/auth';

@NgModule({
  declarations: [
    AppComponent],
  
    imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    MatSlideToggleModule, 
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
//    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
//    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
    // error solution NullInjectError
//    AngularFireModule.initializeApp(environment.firebase)

  ],

    
  
    providers: [{ provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy }],
  
    bootstrap: [
    AppComponent],
  
})
export class AppModule {}
