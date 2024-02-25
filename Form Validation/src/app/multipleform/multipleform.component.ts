import { Component, OnInit } from '@angular/core';
import { home } from '../model/home.model';

@Component({
  selector: 'app-multipleform',
  templateUrl: './multipleform.component.html',
  styleUrls: ['./multipleform.component.css']
})
export class MultipleformComponent implements OnInit {
  home=new home()
  dataarray=[];
  constructor() { }

  ngOnInit() {
    this.home=new home()
    this.dataarray.push(this.home);
  }

  addForm()
  {
    this.home=new home()
    this.dataarray.push(this.home);
  }

  removeForm(index)
  {
    this.dataarray.splice(index);
  }

  onsubmit()
  {
    console.log(this.dataarray);
  }

}
