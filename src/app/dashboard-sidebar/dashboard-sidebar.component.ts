import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit {

  constructor(private router:Router) { }

  @Input()path;

  ngOnInit() {
  }

  navItems=[
   /* {name:'Dashboard',link:'dashboard',icon:'fas fa-tachometer-alt'},*/
    {name:'Manage Students',link:'manageStudent',icon:'fas fa-user'},
    {name:'Manage Routes',link:'manageRoutes',icon:'fas fa-map-marked-alt'},
    {name:'Manage Buses',link:'manageBuses',icon:'fas fa-bus'},/*
    {name:'Manage Users',link:'manageUsers',icon:'fas fa-users'},*/
    {name:'Profile',link:'profile',icon:'fas fa-user-circle'},
    
  ]

  logout(){
    localStorage.clear();
    this.router.navigate(['../'])
  }

}
