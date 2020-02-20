import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  template: `
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}} - {{employee.age}}</li>
  </ul>

  ERR: {{errorMsg}}
  `,
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }  

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                  error => this.errorMsg = error);
  }

}
