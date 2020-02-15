import { MaterialModule } from './../../../material/material.module';
import { FooterComponent } from './../../shared/components/footer/footer.component';
import { SidebarComponent } from './../../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './../../shared/components/header/header.component';
import { SharedModule } from './../../shared/shared.module';
import { PostsComponent } from './../../modules/posts/posts.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    // HeaderComponent,
    // SidebarComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialModule
  ]
})
export class DefaultModule { }
