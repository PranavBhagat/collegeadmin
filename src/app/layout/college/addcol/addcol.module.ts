import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcolComponent } from './addcol.component';
import { AddcolRoutingModule } from './addcol-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AddcolRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddcolComponent]
})
export class AddcolModule { }
