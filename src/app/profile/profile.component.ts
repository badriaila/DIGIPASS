import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ChgCredComponent } from '../chg-cred/chg-cred.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  opendialog(){
    this.dialog.open(ChgCredComponent);
  }

  ngOnInit() {
  }
  isDisabled=true;

  activate(){
    this.isDisabled=false;
  }

  submit(){
    this.isDisabled=true;
  }

}
