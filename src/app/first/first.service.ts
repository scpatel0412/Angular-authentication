import { Injectable } from '@angular/core';
import { First } from './first';
import {HttpClient, HttpErrorResponse} from  '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirstService {
  selectedFirst:First;
  firsts:First[] = [];
  resp:string=""
  constructor(private http:HttpClient){
   this.selectedFirst = new First
  }
  getSignUp(){
    return this.http.get(`http://localhost:8000/api/allusers`)
  }
  postSignUp(first:First){
    return this.http.post(`http://localhost:8000/api/register-user`,first).pipe(
      
    catchError(this.errorHandle)
      )
    
  }
  errorHandle(error:HttpErrorResponse):Observable<any>{
    return throwError(error.error.map((i:any) => {
      return i.msg
    }))
  }


}
