import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase'; 
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of'; 
import 'rxjs/add/operator/switchMap';
import { UserService } from './user.service';



@Injectable()
export class AuthService{
    user$;
    loader;

    constructor(private afAuth:AngularFireAuth,private userService:UserService,
   private loadingCtrl:LoadingController){
        this.user$ = afAuth.authState;   
        console.log(this.user$); 

    }
    login(email:string,password:string,role:string) {
      this.presentLoading();
      this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .then(()=>{
        this.afAuth.auth.currentUser.updateProfile({
          displayName:name,
          photoURL:null
        }).then(()=>{
      this.user$.subscribe(user=>{
          //console.log(user);
        this.userService.save(user,role)
      })})

      })


        
        //this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      }
      sin(data)
      {
        var c=this.afAuth.auth.currentUser.uid;
        this.userService.brave(c,50);
      }
      getReward()
      {
        return this.userService.getRew(this.afAuth.auth.currentUser.uid);
      }
    //   logout() { 
    //     this.afAuth.auth.signOut();
    //   }
    //   get appUser$() : Observable<AppUser> {
    //     return this.user$
    //       .switchMap(user => {
    //           console.log(user);
    //         if (user) return this.userService.get(user.uid);
    
    //         return Observable.of(null);
    //       });    
    //   }
      signin(email:string,password:string){
        return this.afAuth.auth.signInWithEmailAndPassword(email,password);

      }
      presentLoading() {
        this. loader = this.loadingCtrl.create({
          content: "Please wait...",
          duration: 3000
        });
        this.loader.present();
      }
    
    

}