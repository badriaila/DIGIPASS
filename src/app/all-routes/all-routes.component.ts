import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../services/routes.service';

@Component({
  selector: 'app-all-routes',
  templateUrl: './all-routes.component.html',
  styleUrls: ['./all-routes.component.css']
})
export class AllRoutesComponent implements OnInit {

  constructor( private routeService: RoutesService) { }
  routes=[];

  getRoutes(){
    this.routeService.getRoutes()
    .subscribe(res=>{
      this.routes = res.json().response;
    })
  }

  deleteRoute(id){
    this.routeService.deleteRoute(id)
    .subscribe(res=>{
      console.log(res.json())
      this.getRoutes();
    })
  }

  ngOnInit() {
    this.getRoutes();
  }

}
