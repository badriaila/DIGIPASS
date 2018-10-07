import { Component, OnInit } from '@angular/core';
import { BusesService } from '../services/buses.service';

@Component({
  selector: 'app-all-buses',
  templateUrl: './all-buses.component.html',
  styleUrls: ['./all-buses.component.css']
})
export class AllBusesComponent implements OnInit {

  constructor(private busesService: BusesService) { }

buses=[];
  getBuses(){
    this.busesService.getBuses()
    .subscribe(res=>{
      this.buses = res.json().response;
      console.log(this.buses)
    })
  }
  submit(id){
      this.busesService.deleteBus(id)
      .subscribe(res=>{
        console.log(res.json())
        this.getBuses();
  })
}

    ngOnInit() {
    this.getBuses();
  }

}
