import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http:Http
  ) { }
  url = 'http://localhost:3030/api/students';

  submitStudentDetails(data){
    return this.http.post(this.url,data);
  }

  updateData(id,data){
    return this.http.put(this.url+'/'+id,data);
  }

  getByRegNo(regNo){
    return this.http.get(this.url+'/byregno/'+regNo);
  }
}
