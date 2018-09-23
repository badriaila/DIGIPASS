import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-routes',
  templateUrl: './all-routes.component.html',
  styleUrls: ['./all-routes.component.css']
})
export class AllRoutesComponent implements OnInit {

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
