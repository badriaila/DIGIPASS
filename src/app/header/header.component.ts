import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
 

  url = window.location.pathname;

  menus = [
    {"id":"01", "menuitem":"Oracle", "link":"oracle"},
    {"id":"02", "menuitem":"SAP", "link":"sap"},
    {"id":"03", "menuitem":"WorkDay", "link":"workday"},
    {"id":"04", "menuitem":"About", "link":"about"},
    {"id":"05", "menuitem":"Register", "link":"register"},
    {"id":"06", "menuitem":"Contact", "link":"contact"}
  ];

}
