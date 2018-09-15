import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoginFormComponent>,
    private userService : UserService,
    private router : Router
   ) {}

   data={
     usernameOrEmail:'',
     password:''
   }

   error='';
   success=''

  onNoClick(): void {
    this.dialogRef.close();
  }

  login(){
    this.userService.login(this.data)
    .subscribe(res=>{
      let result = res.json();
      this.error='';
      this.success = result.response;
      localStorage.setItem('access_token',result.access_token);
      this.userService.decode(result.access_token)
      this.onNoClick();
      this.router.navigate(['/admin/dashboard']);
    },err=>{
      this.error = err.json().response;
    })
  }

  ngOnInit() {
  }

}
