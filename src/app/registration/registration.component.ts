import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CyclistService } from '../cyclist.service';
import { ICyclist } from '../cyclist';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-registration',
  changeDetection: ChangeDetectionStrategy.OnPush, 
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userModel = new User(999,'name','email',30, 5556665566, 'Yogerdra Gupta', 7278998608,'o+','C66/404 Sapoorji Complex');
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  public cyslistList:ICyclist[];
  public cyclist:ICyclist;

  constructor(private _cyclistService:CyclistService, private route:ActivatedRoute) { }

  ngOnInit() {

    this._cyclistService.getCyclist().subscribe(data=> this.cyslistList = data);
  }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._cyclistService.createCyclist(this.cyclist)
      .subscribe(
        response => console.log('Success!', response),
        error => this.errorMsg = error.statusText
      )
  }

  log(name){
    console.log(name);
  }

  
}

