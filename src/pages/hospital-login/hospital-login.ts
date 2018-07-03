import { HospitalHomePage } from './../hospital-home/hospital-home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';


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
