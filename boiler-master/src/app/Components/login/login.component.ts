import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _login:LoginService,private formBuilder: FormBuilder) { }
  tabledata=[];
  public loginForm:FormGroup;
  
  ngOnInit() {
    this._login.getPosts().subscribe(responseposts=>{this.tabledata=responseposts});
    this,this.initForms();
  }
  initForms() {

    this.loginForm = this.formBuilder.group({
      'name': [null, Validators.required],
      
      'password': [null, Validators.required],
      'email': [null, Validators.required],
    });
}
}
