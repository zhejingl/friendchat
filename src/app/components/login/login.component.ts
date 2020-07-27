import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {user: '', password: ''};
  loginForm = new FormGroup({
    user: new FormControl(this.credentials.user, Validators.required),
    password: new FormControl(this.credentials.password, Validators.required)
  });
  constructor(private router: Router, private loginSvc: LoginService) { 
    this.credentials = {user: '', password: ''};
  }

  ngOnInit(): void {
    console.log('on login component');
  }
  keyDownFunction(event) {
    if(event.keyCode === 13) {
      this.onSubmit();
    }
  }
  onSubmit() {
    this.credentials.user  = this.loginForm.value.user;
    this.credentials.password = this.loginForm.value.password;
    this.loginSvc.login(this.credentials)
    .subscribe((result:any) => {
      console.log('result'+ JSON.stringify(result));
    });
    this.router.navigate(['/main']);
  }
}
