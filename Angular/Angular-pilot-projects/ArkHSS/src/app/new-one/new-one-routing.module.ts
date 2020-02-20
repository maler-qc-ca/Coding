import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewOneComponent } from './new-one.component';

const routes: Routes = [
  { path: '', component: NewOneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewOneRoutingModule { }
