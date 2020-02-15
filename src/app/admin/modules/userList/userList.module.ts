import { UserDetailComponent } from './user-detail/user-detail.component';
import { MaterialModule } from './../../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './userList.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: UserListComponent,
//     children: [
//       {
//         path: 'dashboard', component: DashboardComponent
//       },
//       {
//         path: '', redirectTo: 'dashboard', component: DashboardComponent
//       },
//       {
//         path: 'posts', component: PostsComponent 
//       },
// ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [UserListComponent, UserDetailComponent],
  // exports: [UserDetailComponent]
  entryComponents: [UserDetailComponent]
})
export class UserListModule { }
