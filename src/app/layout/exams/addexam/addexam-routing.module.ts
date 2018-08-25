import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddexamComponent } from './addexam.component';

const routes: Routes = [{
	path: '', component: AddexamComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddexamRoutingModule { }
