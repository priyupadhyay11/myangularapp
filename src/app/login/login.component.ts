import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  submitted = false;

  userDb = [
    { email: "abc@media.com", password: "abc@123", username: "tom" },
    { email: "def@media.com", password: "abc@123", username: "dick" },
  ]
  // Variables Declared
  email;
  password;
  errorMessage: any;
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  get f() { return this.login.controls; }
  ngOnInit() {


  }

  onSubmit(): void {
    var userAuthenticated = null;
    this.userDb.map(user => {
      if (this.login.value.email == user.email && this.login.value.password == user.password) userAuthenticated = user;
    });
    if (userAuthenticated) {
      this.auth.sendToken("userDb");
      this.router.navigate([('/galary')]);
      localStorage.setItem('userDb', JSON.stringify(userAuthenticated));
    } else {
      alert("Invalid credentials");
    }
    this.submitted = true;
    console.log(this.userDb)
    this.login.reset();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate([('/')]);
  }

}
