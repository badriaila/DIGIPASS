import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http:Http) { }
  url = 'http://localhost:3030/api/routes';

  createRoute(data){
    return this.http.post(this.url, data)
  }

  getRoutes(){
    return this.http.get(this.url)
  }

  getSingleRoute(id){
    return this.http.get(this.url + '/' + id);
  }

  deleteRoute(id){
    return this.http.delete(this.url + '/' + id)
  }

  getCities(){
    return this.http.get(this.url + '/cities');
  }



}
