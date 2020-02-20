import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubRoutingModule } from './sub-routing.module';
import { SubComponent } from './sub.component';
import { Space11Component } from './space11/space11.component';
import { LoginContainer1Component } from './login-container1/login-container1.component';
import { SignUpForm1Component } from './sign-up-form1/sign-up-form1.component';
import { Space12Component } from './space12/space12.component';
import { Statistics2Component } from './statistics2/statistics2.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SubComponent, Space11Component, LoginContainer1Component, SignUpForm1Component, Space12Component, Statistics2Component],
  imports: [
    CommonModule,
    SubRoutingModule,
    SharedModule
  ]
})
export class SubModule { }
