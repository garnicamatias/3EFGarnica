import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
import { MaterialModule } from '../shared/material.module';
import { TeachersService } from './services/teachers.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TeachersListComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers: [TeachersService],
})
export class TeachersModule { }
