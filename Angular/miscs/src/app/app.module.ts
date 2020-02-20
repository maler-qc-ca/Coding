import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmpListComponent,
    EmpDetailComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CustomerDashboardModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
