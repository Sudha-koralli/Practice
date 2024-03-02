import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatConfirmComponent } from '../mat-confirm/mat-confirm.component';

const matModules = [
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
];

const coreModules = [FormsModule, ReactiveFormsModule, CommonModule];
@NgModule({
  declarations: [MatConfirmComponent],

  imports: [
    ...coreModules,
    ...matModules,
  ],
  exports: [
    ...coreModules,
    ...matModules,  
  ],
  providers: [],
  entryComponents: [MatConfirmComponent],
})
export class SharedModule {}
