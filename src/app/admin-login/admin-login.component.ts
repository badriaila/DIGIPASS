import { LoginFormComponent } from './../login-form/login-form.component';
import { MatDialog } from '@angular/material';
import { Component} from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent{

  constructor( private dialog:MatDialog) { }

  openDialog() {
      this.dialog.open(LoginFormComponent);
  }
}
