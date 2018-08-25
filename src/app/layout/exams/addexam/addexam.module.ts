import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddexamComponent } from './addexam.component';

import { AddexamRoutingModule } from './addexam-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AddexamRoutingModule
  ],
  declarations: [AddexamComponent]
})
export class AddexamModule { }
