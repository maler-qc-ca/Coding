import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSelectModule, NbCardModule, NbProgressBarModule, NbButtonModule, NbIconModule, NbInputModule, NbTooltipModule } from '@nebular/theme';
import { SmartTableComponent } from './smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BkBarChartModule, BkMultipleAxisChartModule, BkDoughnutChartModule } from '@uibakery/kit';

@NgModule({
  declarations: [SmartTableComponent],
  imports: [
    CommonModule,
    NbSelectModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbProgressBarModule,
    BkBarChartModule,
    BkMultipleAxisChartModule,
    BkDoughnutChartModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbTooltipModule
  ],
  exports: [NbSelectModule, SmartTableComponent, Ng2SmartTableModule, NbCardModule, NbProgressBarModule, BkBarChartModule, BkMultipleAxisChartModule, BkDoughnutChartModule, NbButtonModule, NbIconModule, NbInputModule, NbTooltipModule]
})
export class SharedModule { }
