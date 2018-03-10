import { HospitalServiceProvider } from './../../providers/hospital-service/hospital-service';
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
  allHospitals;
  filteredHosp=[];
  allBlood;
  filteredBlood=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private hosp:HospitalServiceProvider) {
    this.c=this.navParams.get('array');
    this.allHospitals = this.c;
    console.log(this.c);
    
  }

  ionViewWillEnter()
  {
    this.hosp.getBloodDetails().subscribe((data) => {
      this.allBlood = data;
      console.log(data);
    });
    this.hosp.getHospitals().subscribe((data) => {
      this.allHospitals = data;
      console.log(data);
    })
  }
  filter(val: any) {
    //console.log(val);
    //console.log(this.c);
    this.filteredBlood = [];
    this.filteredHosp = [];
    this.allBlood.forEach(element => {
      console.log(element[val]);
      if(element[val]>0)
      {
        this.filteredBlood.push(element.$key);
        this.hosp.getHospitalById(element.$key).subscribe((data) => {
          this.filteredHosp.push(data);
          console.log(data);
          console.log(this.filteredBlood);
        })
      }
    });
    console.log(this.filteredHosp);
    console.log(this.c);
    this.c=[];
    this.filteredHosp.forEach(ele => {
      //console.log(this.c.indexOf(ele.name));
      if(this.allHospitals.indexOf(ele.name)!= -1){
        this.c.push(ele.name);
        console.log(ele.name);
      }
    });
    // this.c = (val) ?
    //   this.c.filter(p => p.toLowerCase().includes(val.toLowerCase())) :
    //   this.allHospitals;
      

}

}
