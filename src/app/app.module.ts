import { UserService } from './services/user.service';
import { ProfileComponent } from './profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { InfoFormComponent } from './info-form/info-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BusesComponent } from './buses/buses.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterModule } from '../../node_modules/@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { MatGridListModule, MatDividerModule, MatListModule, MatIconModule } from '../../node_modules/@angular/material';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { ManageBusesComponent } from './manage-buses/manage-buses.component';
import { ManageRoutesComponent } from './manage-routes/manage-routes.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AuthService } from './services/auth.service';
import { AutoLoginService } from './services/auto-login.service';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { AddStudentComponent } from './add-student/add-student.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    InfoFormComponent,
    BusesComponent,
    HomeComponent,
    AdminLoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    ProfileComponent,
    LoginFormComponent,
    AdminDashboardComponent,
    DashboardSidebarComponent,
    DashboardContentComponent,
    ManageBusesComponent,
    ManageRoutesComponent,
    ManageUsersComponent,
    ManageStudentsComponent,
    AddStudentComponent,
   
    
   
    
  ],
  entryComponents:[
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatExpansionModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'buses',component:BusesComponent},
      {path:'adminLogin',component:AdminLoginComponent, canActivate:[AutoLoginService]},
      {path:'admin',component:AdminDashboardComponent,children:[
        {path:'dashboard',component:DashboardContentComponent},
        {path:'manageStudent',component:ManageStudentsComponent,children:[
          {path:'add_student',component:AddStudentComponent}]
        },
        {path:'manageRoutes',component:ManageRoutesComponent
        },
        {path:'manageBuses',component:ManageBusesComponent},
        {path:'manageUsers',component:ManageUsersComponent}
        
      ],canActivate:[AuthService]},
    
    ]),
    MatDialogModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
   
    
    
   
    
  ],
  providers: [
    UserService,
    AuthService,
    AutoLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
