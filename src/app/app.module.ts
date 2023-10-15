import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AngularFireModule } from '@angular/fire/compat'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';

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
    AngularFireModule.initializeApp(environment.firebaseConfig)],
  
    providers: [{ provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy }],
  
    bootstrap: [
    AppComponent],
  
})
export class AppModule {}
