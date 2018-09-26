import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {

  constructor() { }

  totalCount = [
    {city:'NRT',data:"10",routeId:'01'},
    {city:'GNT',data:"10",routeId:'02'},
    {city:'SAP',data:"10"},
    {city:'VNK',data:"10"},
    {city:'PDRL',data:"10"},
    {city:'CPT',data:"10"},
    {city:'MCL',data:"10"},
    {city:'MTR',data:"10"},
    {city:'Total',data:"10"},

  ];

  ngOnInit() {
  }

}
