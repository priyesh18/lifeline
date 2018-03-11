import { HospitalHomePage } from './../hospital-home/hospital-home';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';

/**
 * Generated class for the HospitalLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hospital-login',
  templateUrl: 'hospital-login.html',
})
export class HospitalLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public authS:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HospitalLoginPage');
  }
  hospIn(data)
  {
    this.authS.signin(data.email,data.password);
    this.navCtrl.push(HospitalHomePage);
    
  }

}
