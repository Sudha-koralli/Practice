import { TestService } from './../test.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmComponent } from '../mat-confirm/mat-confirm.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

export interface PeriodicElement {
  firstName: string;
  lastName: string;
  location: any;
  email: any;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  dataSource: any;
  regForm!: FormGroup;
  submitted = false;
  posts: any;
  editMode: boolean = false;
  editUserId: any;
  selected: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'position',
    'firstName',
    'lastName',
    'email',
    'location',
  ];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    public testService: TestService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router:Router,
  ) {}
  ngOnInit(): void {
    this.getposts();
  }

  OpenUpdate() {
    this.snackBar.open('Updated Successfully!', '', {
      duration: 3000,
    });
  }
  OpenSubmit() {
    this.snackBar.open('Submitted Successfully!', '', {
      duration: 3000,
    });
  }
  OpenDelete() {
    this.snackBar.open('Successfully Deleted!', '', {
      duration: 3000,
    });
  }
  getposts() {
    this.testService.getAllUsers().subscribe({
      next: (response: any) => {
        this.posts = response;
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.posts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }
  submit() {
    this.submitted = true;
    if (this.regForm.invalid) {
      return;
    }
    if (this.editMode) {
      this.testService
        .UpdateDetails(this.editUserId.key, this.regForm.value)
        .subscribe({
          next: () => {
            this.getposts();
            this.OpenUpdate();
            this.resetForm();
          },
        });
    } else {
      const postdata = this.regForm.value;

      this.testService.createAllUsers(postdata).subscribe({
        next: () => {
          this.getposts();
          this.OpenSubmit();
          this.resetForm();
        },
      });
      this.posts.push(this.regForm.value);
      this.resetForm();
    }
  }
  Update(item: any) {
    const ref = this.dialog.open(
      MatConfirmComponent,

      {
        width: '500px',
        height: '150px',
        data: {
          message: 'do you want to Edit the details?',
        },
        backdropClass: 'confirmDialogComponent',
      }
    );
    ref.afterClosed().subscribe((result) => {
      if (result === true) {
        this.editMode = true;
        this.editUserId = item;

        this.regForm.get('firstName')?.setValue(this.editUserId.firstName);
        this.regForm.get('lastName')?.setValue(this.editUserId.lastName);
        this.regForm.get('email')?.setValue(this.editUserId.email);
        this.regForm.get('location')?.setValue(this.editUserId.location);
      }
    });
  }

  deleteDetails(item: any) {
    const ref = this.dialog.open(MatConfirmComponent, {
      width: '500px',
      height: '150px',

      data: {
        message: 'do you want to delete the details?',
      },
      backdropClass: 'confirmDialogComponent',
    });

    ref.afterClosed().subscribe((result) => {
      if (result === true) {
        this.testService.deleteUser(item.key).subscribe();
        this.OpenDelete();
      }
    });
  }
logOut(){
  this.router.navigate(['/login'])

}
  resetForm() {
    this.submitted = false;
    this.regForm.reset();
    Object.keys(this.regForm.controls).forEach((key) => {
      const control = this.regForm.controls[key];
      control.setErrors(null);
    });
  }

  clearposts(event: Event) {
    event.preventDefault();
    this.testService.clearpost().subscribe();
    this.posts = [];
  }
}
