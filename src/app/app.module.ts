import { HospitalProfilePage } from './../pages/hospital-profile/hospital-profile';
import { QrCodePage } from './../pages/qr-code/qr-code';
import { HospitalHomePage } from './../pages/hospital-home/hospital-home';
import { TokenServiceProvider } from './../providers/token-service/token-service';
import { InstructionsPage } from './../pages/instructions/instructions';
import { AuthService } from './../providers/auth.service';
import { LoginPage } from './../pages/login/login';
import { environment } from './../environments/environment';
import { ListPage } from './../pages/list/list';
import { Geolocation } from '@ionic-native/geolocation';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { FCM } from '@ionic-native/fcm';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { ProfilePage } from '../pages/profile/profile';
import { HospitalServiceProvider } from '../providers/hospital-service/hospital-service';
import { UserLoginPage } from '../pages/user-login/user-login';
import { HospitalLoginPage } from '../pages/hospital-login/hospital-login';
import { UserService } from '../providers/user.service';
import { HospdataProvider } from '../providers/hospdata/hospdata';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    ProfilePage,
    HospitalHomePage,
    ListPage,
    LoginPage,
    QrCodePage,
    InstructionsPage,
    UserLoginPage,
    HospitalProfilePage,
    HospitalLoginPage
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule, 
    NgxQRCodeModule, 
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    ProfilePage,
    ListPage,
    QrCodePage,
    LoginPage,
    InstructionsPage,
    HospitalProfilePage,
    UserLoginPage,
    HospitalHomePage,
    HospitalLoginPage
  ],
  providers: [
    Geolocation,
    StatusBar,
    AngularFireDatabase,
    SplashScreen,
    AuthService,
    //FCM,
    UserService,
    BarcodeScanner,    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HospitalServiceProvider,
    TokenServiceProvider,
    HospdataProvider
  ]
})
export class AppModule {}
