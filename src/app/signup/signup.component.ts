import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher { // Email validation
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** Error when the parent is invalid */
class CrossFieldErrorMatcher implements ErrorStateMatcher { // verify password validation
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.invalid;
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

signUpForm: FormGroup;
matcher = new MyErrorStateMatcher();
errorMatcher = new CrossFieldErrorMatcher();

constructor(private fb: FormBuilder) {
  this.setFormField();
}

setFormField() {
this.signUpForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    phoneNumber: [null, Validators.required],
    emailID: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
    verifyPassword: ''
  }, {
    validator: this.passwordValidator
  });

}

passwordValidator(form: FormGroup) {
  const condition = form.controls.password.value !== form.controls.verifyPassword.value;

  return condition ? { passwordsDoNotMatch: true} : null;
}

  onSubmit() {
    if (this.signUpForm.invalid) {
      alert('novalue');
    } else {
      alert('Thanks!');
    }

    console.log('details', this.signUpForm.value);
  }
}
