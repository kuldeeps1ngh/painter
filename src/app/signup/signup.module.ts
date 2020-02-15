import { MaterialModule } from './../material/material.module';
import { SignupComponent } from './signup.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const route: Routes = [
    { path: '', component: SignupComponent }
 ];

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(route)
  ]
})
export class SignupModule { }
