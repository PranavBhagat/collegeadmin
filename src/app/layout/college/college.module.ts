import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollegeComponent } from './college.component';
import { CollegeRoutingModule } from './college-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CollegeRoutingModule,ReactiveFormsModule
  ],
  declarations: [CollegeComponent]
})
export class CollegeModule { }
