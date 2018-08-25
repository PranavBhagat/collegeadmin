import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcolComponent } from './addcol.component';

const routes: Routes = [{
	path: '', component: AddcolComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddcolRoutingModule { }
