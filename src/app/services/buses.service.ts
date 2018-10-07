import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BusesService {

  constructor(private http:Http) { }

  url = 'http://localhost:3030/api/buses';

  createBus(data){
    return this.http.post(this.url, data);
  }


  getBuses(){
    return this.http.get(this.url)
  }

  getSingleBus(id){
    return this.http.get(this.url + '/' + id);
  }

  deleteBus(id){
    return this.http.delete(this.url + '/' + id)
  }

  getBusesByRoute(id){
    return this.http.get(this.url+'/route/'+id)
  }

}
