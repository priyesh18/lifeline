import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HospitalInfoPage } from '../hospital-info/hospital-info';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  c;
  a;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.c=this.navParams.get('array1');
    this.a=this.navParams.get('array2');
    console.log(this.c);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  showInfo(data)
  {
    this.navCtrl.push(HospitalInfoPage,{name:this.c[data],vicinity:this.a[data]});
  }

}
