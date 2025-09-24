import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router : Router){

  }

  login(username:string,password:string ){
    if(username === 'sumi' && password === '12345'){
      return of(true);
    }
    else{
      return of(false)
    }
  }
  logout(){
    this.router.navigate(['login']);
  }
}
