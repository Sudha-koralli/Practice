import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedserviceService } from '../sharedservices/sharedservice.service';

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit {
  data: any;
  id:any;
  constructor(
     private route:ActivatedRoute,
     private SharedserviceService:SharedserviceService
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.getOne();
  }

  getOne()
  {
  this.SharedserviceService.getOne(this.id).subscribe(data=>
  {
       this.data=data;
       console.log(this.data);
  })
  }

}
