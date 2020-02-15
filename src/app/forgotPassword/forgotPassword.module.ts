import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgotPassword.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  { path: '', component: ForgotPasswordComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [ForgotPasswordComponent]
})
export class ForgotPasswordModule { }
