import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser:User;
  users:User[]=[]
  constructor(private http:HttpClient) {
    this.selectedUser = new User() 
   }
   getUsers(){
     return this.http.get(`http://localhost:8000/api/allusers`).pipe(
       catchError(this.errorHandle)
     )
   }
   errorHandle(error:HttpErrorResponse){
     return throwError(error.message)
   }
}
