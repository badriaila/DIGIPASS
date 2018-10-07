import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../services/routes.service';
import { BusesService } from '../services/buses.service';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(
    private routeService:RoutesService,
    private busesService: BusesService,
    private studentService:StudentService,
    private router:Router,
    private toasterService:ToasterService
  ) { }

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


  routes=[];
  cities=[];
  stages=[];
  buses=[];

  selectedRoute={
    city:'',
    stage:''
  }

  getBusesByRoute(){
    if(this.selectedRoute.city && this.selectedRoute.stage){
      let route = this.routes.find(x=> x.city._id == this.selectedRoute.city && x.stage._id == this.selectedRoute.stage);
      if(route){
        this.getBuses(route._id)
        this.data.amount = route.cost
        this.data.route = route._id
      }
      else{
        this.buses=[];
        this.data.amount=0;
        this.data.route='';
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
    this.busesService.getBusesByRoute(id)
    .subscribe(res=>{
      this.buses = res.json().response;
    })  
  }

  data={
    regNo:'',
    firstName:'',
    lastName:'',
    course:'',
    branch:'',
    year:0,
    mobile:null,
    email:'',
    route:'',
    busNo:'',
    seatNo:null,
    receiptNo:'',
    amount:0,
  }

  submit(){
    this.studentService.submitStudentDetails(this.data)
    .subscribe(res=>{
      this.toasterService.success('student added successfully')
      this.router.navigate(['/admin/manageStudent/search_student'],{queryParams:{search:res.json().response.regNo}})
    },err=>{
      this.toasterService.error(err.json().message)
    })
  }

  ngOnInit() {
    this.getCities(),
    this.getRoutes() 
  }

}
