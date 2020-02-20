import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { ParentSpaceComponent } from './parent-space/parent-space.component';
import { SpaceChartComponent } from './space-chart/space-chart.component';
import { BarsComponent } from './bars/bars.component';
import { SpaceLinesComponent } from './space-lines/space-lines.component';
import { AnotherLinesComponent } from './another-lines/another-lines.component';
import { DoSpaComponent } from './do-spa/do-spa.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashComponent, ParentSpaceComponent, SpaceChartComponent, BarsComponent, SpaceLinesComponent, AnotherLinesComponent, DoSpaComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    SharedModule
  ]
})
export class DashModule { }
