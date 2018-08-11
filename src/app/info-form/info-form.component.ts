import { Component, OnInit } from '@angular/core';
import { dropin } from '../animate';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css'],
  animations:[
    dropin
  ]
})
export class InfoFormComponent implements OnInit {

  constructor() { }

  infoType="reg";

  ngOnInit() {
  }

}
