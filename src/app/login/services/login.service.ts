import { Injectable } from '@angular/core';
import { LoginUser } from 'src/app/shared/models/loginUser';
import { User } from 'src/app/shared/models/user';
import { SessionService } from '../../core/services/session.service';
import { Session } from '../../shared/models/session';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private session : SessionService) { 
    
   }

  login(loginData : LoginUser){
    let sessionActive : Session = {
      isSessionActive : true,
      activeUser : loginData
    }
    this.session.createSession(sessionActive)
    console.log(sessionActive)
  }
}
