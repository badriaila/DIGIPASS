import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../services/routes.service';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent implements OnInit {

  constructor(
    private routeService: RoutesService
  ) { }

  data={
    city:'',
    stage:'',
    cost:0
  }

  cities=[];
  stages=[];
  
  getCities(){
    this.routeService.getCities()
    .subscribe(res=>{
      let result = res.json();
      this.cities = result.response;
    })
  }

  getStages(){
    let city = this.cities.find(x=> x._id == this.data.city);
    if(city)
      this.stages = city.stages
    else  
      this.stages=[];
  }

  submit(){
    this.routeService.createRoute(this.data)
    .subscribe(res=>{
      console.log(res.json())
    },err=>{
      console.log(err)
    })
  }

  ngOnInit() {
    this.getCities();
  }

}
