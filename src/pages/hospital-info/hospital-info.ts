import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase'; 
import { UserService } from '../../providers/user.service';


/**
 * Generated class for the HospitalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hospital-info',
  templateUrl: 'hospital-info.html',
})
export class HospitalInfoPage {
  nam;
  add;
  details;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public uService:UserService) {
    this.nam=this.navParams.get('name');
    console.log(this.nam);
    this.add=this.navParams.get('vicinity');
    console.log(this.add);


  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad HospitalInfoPage');
  }
 

  

}
