import { AuthGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  // { path: '', loadChildren: './login/login.module#LoginModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'sign-up', loadChildren: './signup/signup.module#SignupModule' },
  { path: 'forgot-password', loadChildren: 'src/app/forgotPassword/forgotPassword.module#ForgotPasswordModule' },
  // { path: 'home', loadChildren: 'src/app/modules/navigation/navigation.module#NavigationModule' },
  // { path: 'admin', canActivate: [AuthGuard], loadChildren: 'src/app/admin/admin.module#AdminModule' },
  { path: 'admin', loadChildren: 'src/app/admin/admin.module#AdminModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
