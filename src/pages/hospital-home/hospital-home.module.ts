import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HospitalHomePage } from './hospital-home';

@NgModule({
  declarations: [
    HospitalHomePage,
  ],
  imports: [
    IonicPageModule.forChild(HospitalHomePage),
  ],
})
export class HospitalHomePageModule {}
