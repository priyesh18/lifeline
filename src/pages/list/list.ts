import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  c;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.c=this.navParams.get('array');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
