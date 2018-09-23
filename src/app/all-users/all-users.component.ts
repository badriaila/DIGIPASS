import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor() { }
  routes=[
    {id:'01',city:'Narasaraopet',stage:'Siva Statue',mobile:'9494246461',email:'ailabadhri@gmail.com'},
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
