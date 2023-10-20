import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private afAuth : AngularFireAuth,
    public fb : FormBuilder
  ) {
    'correo' ; new FormControl("", Validators.required)
  }

  ngOnInit() {
  }


}
