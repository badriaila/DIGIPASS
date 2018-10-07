import { Component, OnInit } from '@angular/core';
import { BusesService } from '../services/buses.service';

@Component({
  selector: 'app-remove-bus',
  templateUrl: './remove-bus.component.html',
  styleUrls: ['./remove-bus.component.css']
})
export class RemoveBusComponent implements OnInit {

  constructor(private busesService:BusesService) { }

  ngOnInit() {
    this.getbuses();
  }

    data:'';
    buses=[];
    submit(){
      this.busesService.deleteBus(this.data);

    }
    
    getbuses(){
      {
        this.busesService.getBuses()
        .subscribe(res=>{
          this.buses = res.json().response;
          console.log(this.buses)
        })
    }
  }
}
