//import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

import { Injectable } from '@angular/core';


@Injectable()
export class TokenServiceProvider {

  constructor(private db: AngularFireDatabase) {
    
  }
  registerToken(token)
  {
    console.log(token);
    return this.db.list('/tokens').push(token);
  }
  getToken()
  {
    return this.db.list('/tokens');
  }
  deleteToken(key)
  {
    return this.db.object('/tokens/' + key).remove();
  }

}
