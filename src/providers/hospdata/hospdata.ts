//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class HospdataProvider {

  constructor(
    //public http: HttpClient,
    private db: AngularFireDatabase) {
    
  }
  storeData(data)
  {
    console.log(data);
    return this.db.list('/hospitals').push(data);
  }
  storeBlood(id,blood)
  {
    console.log(blood);
    return this.db.object('/blood/'+id).update(blood);
  }

}
