import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservices/sharedservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  servicedata:any;
  constructor(
    private SharedserviceService:SharedserviceService
  ) { }

  ngOnInit() {
    this.servicedata=this.SharedserviceService.getData();
    console.log(this.servicedata);
  }

}
