import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from "@angular/core";
import firebase from 'firebase';

@Injectable()
export class UserService{
    constructor(private db: AngularFireDatabase) { }

    save(user,role) {
        console.log(role);
        if(role==='users')
        {
            this.db.object('/'+role+'/'+user.uid).update({
                email: user.email
              });
        
        }
        else
        {
            this.db.object('/'+role+'/'+user.uid).update({
                email: user.email
              });
        
        }
        
    }
  
    // get(uid: string): FirebaseObjectObservable<AppUser> { 
    //   return this.db.object('/users/' + uid);
    // }
}