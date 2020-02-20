import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
              Inline 
              XCA {{name}} {{2+2}}

              <input [(ngModel)]="name" type="text">
              {{name}}

              <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

              <ng-template #thenBlock>
                <h2>Then</h2>
              </ng-template>

              <ng-template #elseBlock>
                <h2>Else</h2>
              </ng-template>

              <div [ngSwitch]="color">
                <div *ngSwitchCase="'red'">red</div>
                <div *ngSwitchCase="'blue'">blue</div>
                <div *ngSwitchCase="'green'">green</div>
                <div *ngSwitchDefault>DEF</div>
              </div>

              <ul *ngFor="let employee of employees">
                <li>{{employee.name}}</li>
              </ul>

              <h2>{{xxxx}}</h2>

              <button (click)="fireEvent()">Send</button>

              {{ color }}
              {{ color | slice:3:5 }}
              {{ person | json }}<br />

              {{5.678 | number:'1.2-3'}}<br />              
              {{5.678 | number:'3.4-5'}}<br />
              {{5.678 | number:'3.1-2'}}<br />
              {{0.678 | percent }}<br />
              {{0.678 | currency: 'CAD': 'code' }}<br />

              {{0.678 | currency: 'CAD': 'code' }}<br />

              {{ date | date:'short' }}<br />
              {{ date | date:'shortDate' }}<br />
              {{ date | date:'shortTime' }}<br />

            </div>`,
  styles: [`
    div {
      color: red;
    }
  `]
})
export class TestComponent implements OnInit {

  public color = "BlueABCD";
  @Input('parentData') public xxxx;
  @Output() public childEvent = new EventEmitter();

  public colors = ["red", "blue", "yellow", "ssss"];

  public employees = [];

  public person = {
    "firstName": "Moe",
    "lastName": "Aler"
  }

  public date = new Date();

  public name = "";
  public msg = "";
  displayName = true;
  constructor() { }

  fireEvent(){
    this.childEvent.emit('Hey from Child');
  }

  ngOnInit() {
  }

  logMessage(value){
    console.log(value);
    //this.msg = event.type + "<br />click dddddddddddd";
  }

}
