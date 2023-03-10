import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  loginForm !: FormGroup;

  constructor(
    private loginService : LoginService,
    private route : Router
  ){}

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email : new FormControl(),
        pass : new FormControl(),
        isAdmin : new FormControl(false),
        isActive : new FormControl(false)
      }
    )
  }

  login() {
    let user : User= {
      email : this.loginForm.value.email,
      pass : this.loginForm.value.pass,
      isAdmin : this.loginForm.value.isAdmin,
    }
    let isActive = this.loginForm.value.isActive
    this.loginService.login(user)
    this.route.navigate(['main'])
  }

}
