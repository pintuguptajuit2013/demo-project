import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {ICyclist} from './cyclist'
import { catchError } from 'rxjs/operators';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public isValidAdmin(adminModel:Admin):boolean{
    if(adminModel.username =='pintug' && adminModel.password =='pintug')
    return true;
    return false;
  }
}
