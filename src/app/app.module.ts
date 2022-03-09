import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component'

const routes: Routes = [
      {
        path:'first-component',
        component:FirstComponent
      },
      {
        path:'second-component',
        component:SecondComponent
      },
      {
        path:"home",
        component:UserComponent
      }
]; 



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
