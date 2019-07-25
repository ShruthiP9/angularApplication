 import { HomeComponent } from './../home/home.component';
import { Router, RouterModule } from '@angular/router';

import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public showSidebar: boolean = false;
  @Input() public isUserLoggedIn:boolean;
  constructor(private router:Router) { }
 
topNav=[{name:"home"},{name:"topics"},{name:"reports"},{name:"features"}];
  ngOnInit() {
  }
  onAdd(){
  this.topNav.push({name:'hello'});
  }
  onChange(items){
   
    items.name='Updated';

  }
  onRemove(items){
  let index=this.topNav.indexOf(items);
    this.topNav.splice(index,1);
  }
  track(index,items){
    return items ? items.name:undefined;
  }
  navigateToAboutUs(){
    this.router.navigateByUrl('/about-us');
  }
}
