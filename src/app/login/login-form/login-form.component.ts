import { NotificationService } from './../../shared/notification/notification.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm = this.fb.group({
    emailID: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private router: Router, private notificationService: NotificationService) {}

  onSubmit() {
    if (this.loginForm.invalid) {
      this.notificationService.warn('! Please fill required fields');
    } else {
      if (this.loginForm.controls.emailID.value == 'test@test.com' && this.loginForm.controls.password.value == '123456') {
        // this.logUserIn();
        this.notificationService.success('Login successfully');
        this.router.navigate(['admin']);
        const teachTechToken = '5s5dfdf88dsfttdyf7789sa';
        localStorage.setItem('teachTechToken', teachTechToken);
        console.log('tokenSet', localStorage.getItem('teachTechToken'));
      } else if (this.loginForm.controls.emailID.value != 'test@test.com') {
        this.notificationService.error('! User not found');
      } else if (this.loginForm.controls.password.value != '123456') {
        this.notificationService.error('! Incorrect Password');

      }
    }

    // console.log('details', this.loginForm.value);
  }

  // logUserIn() {
  //   this.router.navigate(['admin']);
  // }
}
