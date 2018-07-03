import { QrCodePage } from './../qr-code/qr-code';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http/';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'page-hospital-home',
  templateUrl: 'hospital-home.html',
})
export class HospitalHomePage {
  generatePage = QrCodePage;
  message = "";
  constructor(public navCtrl: NavController,
    private http: HttpClient, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HospitalHomePage');
  }
  emergency()
  {
    console.log(this.message);
    this.sendNotification();
  }

  sendNotification() 
{  
let body = {
    "notification":{
      "title":"Emergency",
      "body":this.message,
      "sound":"default",
      "click_action":"FCM_PLUGIN_ACTIVITY",
      "icon":"fcm_push_icon"
    },
    "data":{
      "param1":"value1",
      "param2":"value2"
    },
      "to":"/topics/all",
      "priority":"high",
      "restricted_package_name":""
  }
  let options = new HttpHeaders().set('Content-Type','application/json');
  this.http.post("https://fcm.googleapis.com/fcm/send",body,{
    headers: options.set('Authorization', 'key=AIzaSyAwtMULjNzbPkI0ju1AEDd8KI6Ph_LGLqk'),
  })
    .subscribe();
}
}
