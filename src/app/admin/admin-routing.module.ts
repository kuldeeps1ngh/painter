import { PostsComponent } from './modules/posts/posts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: DefaultComponent,
    children: [
      // {
      //   path: 'dashboard', component: DashboardComponent
      // },
      // {
      //   path: '', redirectTo: 'dashboard', component: DashboardComponent
      // },
      // {
      //   path: 'posts', component: PostsComponent
      // },
      { path: 'userlist', loadChildren: 'src/app/admin/modules/userList/userList.module#UserListModule' },
      { path: '', redirectTo: 'userlist', pathMatch: 'full' }
]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
