import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../admin';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() isLogginVisible = true;
  adminModele = new Admin('username','password');

  topicHasError = true;
  submitted = false;
  errorMsg = '';
  loading = true;
  constructor(private _loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    console.log(this.adminModele);
    if(this._loginService.isValidAdmin(this.adminModele)){
      this.submitted = true;
      
      this.router.navigate([`/admin`]);
    }else {
      this.submitted = false;
      this.errorMsg = 'Opps You are not authenticated user !! to login';
    }
  }

 

}
