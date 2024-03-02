import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input'
import {MatTableModule} from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule}from '@angular/material/toolbar'
import {MatDialogModule}from '@angular/material/dialog'
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
exports:[ HttpClientModule, MatInputModule, MatButtonModule, MatDialogModule,ReactiveFormsModule,
MatTableModule, MatToolbarModule, MatPaginatorModule, BrowserAnimationsModule, MatSortModule,MatIconModule],
})
export class components {
title = 'Registeration Form';
}
