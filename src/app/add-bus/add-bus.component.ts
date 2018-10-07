import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../services/routes.service';
import { BusesService } from '../services/buses.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  constructor(
    private routeService:RoutesService,
    private busesService:BusesService
  ) { }

 
  data={
      busno:'',
      route:''   
  }
 
  routes=[]

  getRoutes(){
    this.routeService.getRoutes()
    .subscribe(res=>{
      this.routes = res.json().response;
    })
  }



  submit(){
    this.busesService.createBus(this.data)
    .subscribe(res=>{
      alert("Succsefully added");
    },err=>{
      console.log(err)
    })
  }

  ngOnInit() {
    this.getRoutes();
  }

}
