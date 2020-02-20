import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewOneRoutingModule } from './new-one-routing.module';
import { NewOneComponent } from './new-one.component';
import { TopTableComponent } from './top-table/top-table.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { BottomRightComponent } from './bottom-right/bottom-right.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NewOneComponent, TopTableComponent, CardDetailsComponent, BottomRightComponent],
  imports: [
    CommonModule,
    NewOneRoutingModule,
    SharedModule
  ]
})
export class NewOneModule { }
