import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user.service';


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
