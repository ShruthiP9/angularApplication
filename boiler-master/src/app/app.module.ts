import { LoginService } from './services/login.service';


import { BrowserModule } from '@angular/platform-browser';

import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HelpComponent } from './Components/help/help.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    HelpComponent,
    LoginComponent,
   
  ],
  // modules to be used
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    
   
     RouterModule.forRoot([
       {path:'',component:LoginComponent},
       {path:'home',component:HomeComponent},
       {path:'about-us',component:AboutUsComponent},
       {path:'help',component:HelpComponent}
    ])
  ],
  providers: [RouterModule,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

