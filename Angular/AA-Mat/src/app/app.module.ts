import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { IncidentsListComponent } from './incidents-list/incidents-list.component';
import { ChartsComponent } from './charts/charts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MaterialModule } from './material-module';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IncidentsListComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HighchartsChartModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
