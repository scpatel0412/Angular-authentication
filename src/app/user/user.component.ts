import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  errval:string=""
  getUsers(){
    this.userService.getUsers()
    .subscribe((res) => {
      this.userService.users =  res as []
    },(error) => {
      this.errval  = error
    })
  }

}
