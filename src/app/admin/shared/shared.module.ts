import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../material/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';

const sharedComponent = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  AreaComponent,
  CardComponent,
  PieComponent
]

@NgModule({
  declarations: [
    sharedComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    sharedComponent
  ]
})
export class SharedModule { }
