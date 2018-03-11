import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HospitalProfilePage } from './hospital-profile';

@NgModule({
  declarations: [
    HospitalProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(HospitalProfilePage),
  ],
})
export class HospitalProfilePageModule {}
