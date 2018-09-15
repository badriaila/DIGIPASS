import { Injectable } from '@angular/core';
import { Router, CanActivate } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginService implements CanActivate {

  constructor(private router:Router) { }

  canActivate(){
    const token = localStorage.getItem('access_token');
    if(!token){
      return true;
    }else{
      this.router.navigate(['/admin/dashboard']);
      return false;
    }
  }
}
