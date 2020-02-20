import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { TestLayoutComponent } from './test-layout/test-layout.component';
import { TableComponent } from './table/table.component';
import { StatsComponent } from './stats/stats.component';
import { Statistics1Component } from './statistics1/statistics1.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TestComponent, TestLayoutComponent, TableComponent, StatsComponent, Statistics1Component],
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule
  ]
})
export class TestModule { }
