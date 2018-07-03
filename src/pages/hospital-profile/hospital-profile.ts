import { HospdataProvider } from './../../providers/hospdata/hospdata';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-hospitalprofilepage',
  templateUrl: 'hospital-profile.html'
})
export class HospitalProfilePage {
  private hospitalId;
  constructor(public navCtrl: NavController, public hosdata: HospdataProvider) {

  }

  onAddBlood(blood) {
    //console.log(blood);
    this.hosdata.storeBlood(this.hospitalId,blood).then((result) => {
      console.log(result);
    })
  }
  onAddHospital(hos)
  {
    this.hosdata.storeData(hos).then((result) => {
      console.log(result.key);
      this.hospitalId = result.key;
    })
    //console.log(hos);

  }

}
