import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';
import { SharedModule} from './../shared/shared.module';

const routes: Routes = [ {
path:'',
 component:SignupComponent,
}

];

@NgModule({
declarations: [SignupComponent],
imports: [
CommonModule,
SharedModule,
 RouterModule.forChild(routes)]

})

export class SignupModule { }