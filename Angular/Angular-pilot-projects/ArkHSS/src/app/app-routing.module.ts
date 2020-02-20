import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Test', loadChildren: './test/test.module#TestModule' },
  { path: 'Dash', loadChildren: './dash/dash.module#DashModule' },
  { path: 'Sub', loadChildren: './sub/sub.module#SubModule' },
  { path: 'New-One', loadChildren: './new-one/new-one.module#NewOneModule' },
  { path: '', redirectTo: 'Test', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
