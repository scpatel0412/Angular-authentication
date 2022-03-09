import { Injectable } from '@angular/core';
import { Second } from './second';
import {HttpClient, HttpErrorResponse} from  '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SecondService {
  selectedSecond:Second;
  seconds:Second[]=[];
  constructor(private http:HttpClient) { 
    this.selectedSecond = new Second()
  }
  getLogIn(){
    return this.http.get(`http://localhost:8000/api/allusers`)
  }
  postLogIn(second:Second){
    return this.http.post(`http://localhost:8000/api/signin-user`,second).pipe(
      
    catchError(this.errorHandle)
      )
    
  }
  errorHandle(error:HttpErrorResponse):Observable<any>{
    return throwError(error.error.message || "Server Error")
  }
 

}
