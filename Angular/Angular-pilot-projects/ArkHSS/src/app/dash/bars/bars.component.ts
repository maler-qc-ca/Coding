import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarsComponent implements OnInit {
  data =   [
    100,
    300,
    200,
    400,
    600,
    700,
    500
  ];

  constructor() { }

  ngOnInit() {
  }

}
