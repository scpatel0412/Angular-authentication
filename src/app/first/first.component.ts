import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirstService } from './first.service';
import {First} from './first'
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers:[FirstService]
})
export class FirstComponent implements OnInit {
 
  constructor(public firstService:FirstService,public router:Router) { }
  resp1:[]=[]
  ngOnInit(): void {
    this.getSignUp()
  }
  getSignUp(){
    this.firstService.getSignUp()
    .subscribe((res) => {
      this.firstService.firsts = res as First[]
      
    })
  }
  postSignUp(form:NgForm){
    this.firstService.postSignUp(form.value)
    .subscribe((res) => {
    
      this.getSignUp()
      this.firstService.resp = res.message
      if(res.message){
        this.router.navigate(["/home"])
      }
      this.firstService.selectedFirst = new First()
    },(error:any)=>{
      this.resp1 = error
      console.log("error",this.resp1)
    }
    
    )
    
  }

}
