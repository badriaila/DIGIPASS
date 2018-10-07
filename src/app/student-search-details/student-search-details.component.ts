import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { RoutesService } from '../services/routes.service';
import { BusesService } from '../services/buses.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-student-search-details',
  templateUrl: './student-search-details.component.html',
  styleUrls: ['./student-search-details.component.css']
})
export class StudentSearchDetailsComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private studentService:StudentService,
    private routeService:RoutesService,
    private busesService: BusesService
  ) { 
    this.route.queryParams.subscribe(params=>{
      if(params.search)
        this.searchByReg(params.search)
    })
  }

  ngOnInit() {
    this.getCities(),
    this.getRoutes() 
  }
  selectedCourse={};

  courses=[
    {
      name:'B-Tech',
      branches:['CSE','ECE','EEE','ME','CE'],
      years:[1,2,3,4]
    },
    {
      name:'M-Tech',
      branches:['CSE','ECE','EEE','ME','CE'],
      years:[1,2]
    },
    {
      name:'MBA',
      branches:['branch1','branch2'],
      years:[1,2]
    },
    {
      name:'MCA',
      branches:['branch1','branch2'],
      years:[1,2]
    }
  ];

  studentData;

  
  routes=[];
  cities=[];
  stages=[];
  buses=[];

  selectedRoute={
    city:'',
    stage:''
  }

  studentId='';

  getBusesByRoute(){
    if(this.selectedRoute.city && this.selectedRoute.stage){
      let route = this.routes.find(x=> x.city._id == this.selectedRoute.city && x.stage._id == this.selectedRoute.stage);
      if(route){
        this.getBuses(route._id)
        this.studentData.amount = route.cost
        this.studentData.route = route._id
        this.studentData.busNo=''
      }
      else{
        this.buses=[];
        this.studentData.amount=0;
        this.studentData.route='';
        this.studentData.busNo=''
      }
    }
  }

  getRoutes(){
    this.routeService.getRoutes()
    .subscribe(res=>{
      this.routes = res.json().response;
    })
  }

  getCities(){
    this.routeService.getCities()
    .subscribe(res=>{
      let result = res.json();
      this.cities = result.response;
    })
  }

  getStages(id){
    let city = this.cities.find(x=> x._id == id);
    if(city)
      this.stages = city.stages
    else  
      this.stages=[];
  }

  getBuses(id){
    this.studentData.busNo=''
    this.busesService.getBusesByRoute(id)
    .subscribe(res=>{
      this.buses = res.json().response;
    })  
  }


  searchByReg(regno){
    this.studentService.getByRegNo(regno)
    .subscribe(res=>{
      let data = res.json().response[0]
      console.log(data)
      
      let studentData= {
      regNo : data.regNo,
      firstName : data.firstName,
      lastName : data.lastName,
      course : data.course,
      branch : data.branch,
      year : data.year,
      mobile : data.mobile,
      email : data.email,
      busNo : data.busNo,
      seatNo : data.seatNo,
      receiptNo : data.receiptNo,
      createdOn:data.createdOn
      
      
    }
      this.studentId=data._id;
      this.studentData = studentData;
      this.getStages(data.route.city._id)
      this.selectedCourse = this.courses.find(x=> x.name == this.studentData.course);
      this.selectedRoute.city = data.route.city._id
      this.selectedRoute.stage = data.route.stage._id
      this.getBusesByRoute();
    }
    
  )
  }


}
