import { ErrorStateMatcher } from '@angular/material';
import { FormControl, Validators, FormGroupDirective, NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher { // Email validation
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setFormField();
  }

  setFormField() {
    this.forgotForm = this.fb.group({
      emailID: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.log('done!');
  }

}
