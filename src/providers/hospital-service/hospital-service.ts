//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class HospitalServiceProvider {

  constructor(private db: AngularFireDatabase) {
    
  }
  getHospitals()
  {
    return this.db.list('/hospitals')
  }
  getHospitalById(id)
  {
    return this.db.object('/hospitals/'+id);
  }
  getBloodDetails()
  {
    return this.db.list('/blood');
  }

}
