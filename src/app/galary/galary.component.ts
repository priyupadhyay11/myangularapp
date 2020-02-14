import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.scss']
})
export class GalaryComponent implements OnInit {
username;
  constructor(private router: Router) {
    const userDetails = localStorage.getItem('userDb');
    console.log('userDetails',userDetails);
  
  }
  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate([('/login')]);
    localStorage.clear();
  }
}
