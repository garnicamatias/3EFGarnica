import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { SessionService } from '../../core/services/session.service';
import { Session } from '../../shared/models/session';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private session : SessionService) { 
    
   }

  login(user : User){
    let sessionActive : Session = {
      isSessionActive : true,
      activeUser : user
    }
    this.session.createSession(sessionActive)
    console.log(sessionActive)
  }
}
