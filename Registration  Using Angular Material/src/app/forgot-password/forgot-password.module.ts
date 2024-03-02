import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password.component';
import { SharedModule} from './../shared/shared.module';

const routes: Routes = [ {
path:'',
 component:ForgotPasswordComponent,
}

];

@NgModule({
declarations: [ForgotPasswordComponent],
imports: [
CommonModule,
SharedModule,
 RouterModule.forChild(routes)]

})

export class ForgotpasswordModule { }