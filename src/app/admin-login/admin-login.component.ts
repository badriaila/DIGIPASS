import { LoginFormComponent } from './../login-form/login-form.component';
import { MatDialog } from '@angular/material';
import { Component} from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '../../../node_modules/@angular/router';
import { FormControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent{

  constructor(
    private userService : UserService,
    private router : Router
  ) { }

  data={
    usernameOrEmail:'',
    password:''
  }

  error='';
  success='';

  login(){
    this.userService.login(this.data)
    .subscribe(res=>{
      let result = res.json();
      this.error='';
      this.success = result.response;
      localStorage.setItem('access_token',result.access_token);
      this.userService.decode(result.access_token)
      this.router.navigate(['/admin/dashboard']);
    },err=>{
      this.error = err.json().response;
    })
  }

  usernameOrEmail = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
checking(){
  console.log(this.usernameOrEmail)
}
}

