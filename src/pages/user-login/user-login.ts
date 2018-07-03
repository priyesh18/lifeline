import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';


@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public authS:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLoginPage');
  }
  userIn(data)
  {
    this.authS.signin(data.email,data.password);
    this.navCtrl.push(HomePage);
    
  }

}
