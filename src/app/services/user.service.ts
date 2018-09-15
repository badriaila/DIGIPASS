import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import * as JWT from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:Http) { }

  login(data){
    return this.http.post('http://localhost:3030/api/login',data)
  }

  decode(token){
    let data = JWT(token);
    localStorage.setItem('id',data.id);
    localStorage.setItem('isAdmin',data.isAdmin);
  }
}
