import { HospitalLoginPage } from './../hospital-login/hospital-login';
import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserLoginPage } from '../user-login/user-login';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  private authservice:AuthService) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  onSubmit(data) {
    //console.log(data);
    this.authservice.login(data.email,data.password,data.role);

  }
  onIn(data) {
    console.log(data);
  }
  onUserPage()
  {
    this.navCtrl.push(UserLoginPage);
  }
  onHospitalPage()
  {
    this.navCtrl.push(HospitalLoginPage);
  }
 
}
