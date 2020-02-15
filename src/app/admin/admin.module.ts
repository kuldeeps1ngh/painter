import { AddRoomComponent } from './modules/add-room/add-room.component';
import { DefaultModule } from './layouts/default/default.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AddRoomComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    DefaultModule
  ]
})
export class AdminModule { }
