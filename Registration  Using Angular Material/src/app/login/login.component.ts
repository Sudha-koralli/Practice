import { Component } from '@angular/core';
import { TestService } from './../test.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
 
  

constructor(
  private formBuilder: FormBuilder,
  public testService: TestService,
  private router:Router
  
) {}
ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.pattern("^[a-zA-z1-9$@$!%*?&#_]+"),
        Validators.minLength(6),
        Validators.required
      ],
    ],
  });
}
login() {
  this.submitted = true;
  if (this.loginForm.invalid) {
    return;

  }
this.router.navigate(['/admin'])
}
resetForm() {
  this.submitted = false;
  this.loginForm.reset();
}

}

