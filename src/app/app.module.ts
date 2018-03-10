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


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { ProfilePage } from '../pages/profile/profile';
import { HospitalServiceProvider } from '../providers/hospital-service/hospital-service';
import { UserLoginPage } from '../pages/user-login/user-login';
import { HospitalLoginPage } from '../pages/hospital-login/hospital-login';
import { UserService } from '../providers/user.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    ProfilePage,
    ListPage,
    LoginPage,
    InstructionsPage,
    UserLoginPage,
    HospitalLoginPage
  ],
  
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,  
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    ProfilePage,
    ListPage,
    LoginPage,
    InstructionsPage,
    UserLoginPage,
    HospitalLoginPage
  ],
  providers: [
    Geolocation,
    StatusBar,
    AngularFireDatabase,
    SplashScreen,
    AuthService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HospitalServiceProvider
  ]
})
export class AppModule {}
