import { AuthService } from './../../providers/auth.service';
import { UserService } from './../../providers/user.service';
import { TokenServiceProvider } from './../../providers/token-service/token-service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InstructionsPage } from './../instructions/instructions';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { MapPage } from '../map/map';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scannedCode = null;
  activeCodes = null;
  constructor(public navCtrl: NavController,private barcodeScanner:BarcodeScanner, private tkservice: TokenServiceProvider, private alertCtrl: AlertController,private authService: AuthService) {

  }

  addBlood(event) {

    //this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(InstructionsPage);

  }


  findBlood(event) {

    this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(SearchPage);
}
 myRewards()
 {
   this.authService.getReward().subscribe((data) => {
     console.log(data);
     this.presentAlert(data.reward);
   })
 }
 scanCode() {
  this.barcodeScanner.scan().then(barcodeData => {
    this.scannedCode = barcodeData.text;
    this.checkToken();
  }, (err) => {
      console.log('Error: ', err);
  });
}
checkToken()
  {
    let bool = true;
    this.activeCodes.forEach(element => {
        if(element.$value === this.scannedCode)
        {
          this.tkservice.deleteToken(element.$key);
          console.log(element.$key);
          this.presentAlert("You are rewarded");
          bool = false;
          return false;
        }
        
    });
    if(bool === true)
    {
      console.log('popup');
      this.presentAlert("Incorrect");
    }
  }
  presentAlert(data) {
    let alert = this.alertCtrl.create({
      title: data,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
