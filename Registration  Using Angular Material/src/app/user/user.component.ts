import { TestService } from './../test.service';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { MatConfirmComponent} from '../mat-confirm/mat-confirm.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


export interface PeriodicElement {
  firstName: string;
  lastName: string;
  location: any;
  email: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {firstName: '', lastName: '', location: '', email: ''}]

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  
})
export class UserComponent {
  regForm!: FormGroup;
  submitted = false;
  posts: any;
  errormessage: any;
  editMode: boolean = false;
  editUserId: any;
  selected:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'location', 'Edit', 'Delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.posts.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.posts.paginator = this.paginator;
    this.posts.sort = this.sort;
  }
  constructor(
    private formBuilder: FormBuilder,
    public testService: TestService,
    private dialog:MatDialog,

  ) {}
  ngOnInit(): void {
    this.getposts();
    this.regForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.pattern("^[a-zA-z -']+"),
          Validators.minLength(1),
          Validators.required,
        ],
      ],
      lastName: [
        '',
        [
          Validators.pattern("^[a-zA-z -']+"),
          Validators.minLength(1),
          Validators.maxLength(10),
          Validators.required,
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      location: [
        '',
        [
          Validators.pattern("^[a-zA-z -']+"),
          Validators.minLength(1),
          Validators.required,
        ],
      ],
    });

  }
  getposts() {
    this.testService.getAllUsers().subscribe({
      next: (response: any) => {
        this.posts = new MatTableDataSource (response);
        this.posts.sort = this.sort;
      },
      error: (errormessage) => {
        console.log(errormessage);
        this.errormessage = errormessage;
      },
    });
  }
  submit() {
    this.submitted = true;
    if (this.regForm.invalid) {
      return;
    }
    if (this.editMode) {
      this.testService.UpdateDetails(this.editUserId.key,this.regForm.value)
        .subscribe({
          next: () => {
            this.getposts();
          },
        });
    } else {
      const postdata = this.regForm.value;
      this.testService.createAllUsers(postdata).subscribe({
        next: () => {
          this.getposts();
        },
      });
      this.posts.push(this.regForm.value);
      this.regForm.reset;
    }

  }
  Update(item: any) {
      const ref=this.dialog.open(
        MatConfirmComponent,
        {
          width:'500px',
          height:'150px',
        data:{
          message:'do you want to Edit the details?',
        },
         backdropClass:'confirmDialogComponent',
       }
        );
        ref.afterClosed().subscribe(result=>{
          if(result===true){
      this.editMode = true;
      this.editUserId = item;
      this.regForm.get('firstName')?.setValue(this.editUserId.firstName);
      this.regForm.get('lastName')?.setValue(this.editUserId.lastName);
      this.regForm.get('email')?.setValue(this.editUserId.email);
      this.regForm.get('location')?.setValue(this.editUserId.location);
    }
  })
  }

  deleteDetails(item: any) {
    const ref=this.dialog.open(
    MatConfirmComponent,
    {
      width:'500px',
      height:'150px',
    data:{
      message:'do you want to delete the details?',
    },
     backdropClass:'confirmDialogComponent',
   }
    );
    ref.afterClosed().subscribe(result=>{
      if(result===true){
        this.testService.deleteUser(item.key).subscribe();
      }
    })
  }
  reset() {
    this.submitted = false;
    this.regForm.reset;
  }
  clearposts(event: Event) {
    event.preventDefault();
    this.testService.clearpost().subscribe();
    this.posts = [];
  }
}
