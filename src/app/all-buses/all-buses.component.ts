import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-buses',
  templateUrl: './all-buses.component.html',
  styleUrls: ['./all-buses.component.css']
})
export class AllBusesComponent implements OnInit {

  constructor() { }

  routes=[
    {id:'01',city:'Narasaraopet',stage:'Siva Statue'},
    {id:'01',city:'Narasaraopet',stage:'Siva Statue'},
    {id:'01',city:'Narasaraopet',stage:'Siva Statue'},
    {id:'01',city:'Narasaraopet',stage:'Siva Statue'},
    {id:'01',city:'Narasaraopet',stage:'Siva Statue'},
    {id:'01',city:'Narasaraopet',stage:'Siva Statue'},
    {id:'01',city:'Narasaraopet',stage:'Siva Statue'},
    {id:'02',city:'Narasaraopet',stage:'Kota center'}
  ];

  ngOnInit() {
  }

}
