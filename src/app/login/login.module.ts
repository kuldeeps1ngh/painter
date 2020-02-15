import { MaterialModule } from './../material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const route: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class LoginModule { }
