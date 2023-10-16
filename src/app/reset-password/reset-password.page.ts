import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
//import { toastrService } from 'ngx Toastr';
//import { FirebaseCodeErrorService } from 'src/app/services/Firebase code error.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private afAuth : AngularFireAuth,
//    private toastr : toastrService,
//    private fireBaseError: FirebaseCodeErrorService, 
    public fb : FormBuilder
  ) { }

  ngOnInit() {
  }


}
