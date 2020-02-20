import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
