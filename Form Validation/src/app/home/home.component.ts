import { Component, OnInit } from '@angular/core';
import { home } from '../model/home.model';
import { SharedserviceService } from '../sharedservices/sharedservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[SharedserviceService]
})
export class HomeComponent implements OnInit {
  data: any;
  servicedata: any;
  home=new home();
  homearray=[];
  activeindex=-1;
  title='Submit';
  constructor(

    private SharedserviceService:SharedserviceService
  ) { }

  ngOnInit() {
      this.getData();
  }


  getData()
  {
    this.SharedserviceService.getData().subscribe(data=>
    {
      this.data=data;
      console.log(this.data);
    })
  }

  onsubmit(form)
  {
     if(this.activeindex==-1)
     {
       this.SharedserviceService.createData(this.home).subscribe(data=>{
          this.getData();
         
       })
   
    //  this.homearray.unshift(this.home);
    //  this.home=new home();
     }
     else
     {

         this.SharedserviceService.updateData(this.home).subscribe(data=>{
            this.getData();
         })
       //this.homearray.splice(this.activeindex,1,this.home);
     }
     form.submitted=false;
     this.home=new home();
     this.title='Submit';
     this.activeindex=-1;
  }
   
  delete(j)
  {
    //console.log(j);
    //this.homearray.splice(j);
    this.SharedserviceService.deleteData(j).subscribe(data=>
    {
      this.getData();
    })
  }

  edit(obj,index)
  {
  
    this.home.name=obj.employee_name;
    this.home.salary=obj.employee_salary;
    this.home.age=obj.employee_age;
    this.home.id=obj.id;
    this.title='Update';
    //this.home=obj;
    this.activeindex=index;
  }

}
