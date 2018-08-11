import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent {
  
  boardinggnt = [
    {value:'bustand', viewValue:'Bustand'},
    {value:'chuttugunta', viewValue:'Chuttugunta'},
    {value:'itc', viewValue:'ITC Board'},
    {value:'housingboard', viewValue:'Housing Board'}
]
boardingnrt = [
  {value:1, viewValue:'NGO Colony'},
  {value:2, viewValue:'NSP Colony'},
  {value:3, viewValue:'Ramireddypet'},
  {value:4, viewValue:'Siva Statue'}
]

  busno=1;

  }
