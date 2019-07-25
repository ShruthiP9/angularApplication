import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';



@Injectable()
export class LoginService {

  tabledata=[];
  constructor(private http:Http ){

   }
   
   getPosts():Observable <any>{
     const data={};
     const url= this.http.get['assets/inputs.json'];
   return this.http.get(url,data);
   }
   

}
