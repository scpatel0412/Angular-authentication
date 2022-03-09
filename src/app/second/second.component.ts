import { Component, OnInit } from '@angular/core';
import { SecondService } from './second.service';
import { Second } from './second';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers:[SecondService]
})
export class SecondComponent implements OnInit {

  constructor(public secondService:SecondService, public router:Router) { }

  resp1:string=""
  ngOnInit(): void {
    this.getLogIn()
  }
  getLogIn(){
    this.secondService.getLogIn()
    .subscribe((res) => {
      this.secondService.seconds = res as Second[]
      
    })
  }
  postLogIn(form:NgForm){
    this.secondService.postLogIn(form.value)
    .subscribe((res) => {
    
      this.getLogIn()
      
      if(res.message){
        this.router.navigate(["/home"])
      }
      this.secondService.selectedSecond = new Second()
    },(error:any)=>{
      this.resp1 = error
      console.log("error",this.resp1)
    }
    
    )
    
  }
}
