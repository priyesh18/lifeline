import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HospitalLoginPage } from './hospital-login';

@NgModule({
  declarations: [
    HospitalLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(HospitalLoginPage),
  ],
})
export class HospitalLoginPageModule {}
