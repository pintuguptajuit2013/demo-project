import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {ICyclist} from './cyclist'
import { catchError } from 'rxjs/operators';

@Injectable(
  {providedIn: 'root'}
)
export class CyclistService {

  private _url_get_cyclist = "/assets/data/cyclist.json";
  private _url_get_leaders = "/assets/data/leaders.json";
  private _url_create_cyclist = "'http://localhost:3000/create'"

  constructor(private http:HttpClient) { }

  getCyclist():Observable<ICyclist[]>{
    return this.http.get<ICyclist[]>(this._url_get_cyclist);
  }

  getLeaders():Observable<ICyclist[]>{
    return this.http.get<ICyclist[]>(this._url_get_leaders);
  }

  createCyclist(cyclist:ICyclist):Observable<Object> {

    return this.http.post(this._url_create_cyclist,cyclist).pipe(catchError(this.errorHandler))
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }

}
