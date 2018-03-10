import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';

/**
 * Generated class for the UserLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
