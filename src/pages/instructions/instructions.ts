import { MapPage } from './../map/map';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-instructions',
  templateUrl: 'instructions.html',
})
export class InstructionsPage {
  public mapPage=MapPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstructionsPage');
  }

}
