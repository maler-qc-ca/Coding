import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-detail',
  template: `
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>
  </ul>

  ERR: {{errorMsg}}
  `,
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                  error => this.errorMsg = error);
  }

}
