import { InstructionsPage } from './../instructions/instructions';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MapPage } from '../map/map';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  map(event) {

  this.navCtrl.setRoot(HomePage);
  this.navCtrl.push(MapPage);

  }

  addBlood(event) {

    //this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(InstructionsPage);

  }


  findBlood(event) {

    this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(SearchPage);
}
addProfile()
{
  this.navCtrl.push(ProfilePage);
}

}
