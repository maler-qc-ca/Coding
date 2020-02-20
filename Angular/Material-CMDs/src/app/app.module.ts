import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TypographyComponent } from './typography/typography.component';

import { OverlayContainer } from '@angular/cdk/overlay';
import { AllMaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    NavComponent,
    TableComponent,
    DashboardComponent,
    TreeComponent,
    DragDropComponent,
    TypographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AllMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('override-theme');
  }
}
