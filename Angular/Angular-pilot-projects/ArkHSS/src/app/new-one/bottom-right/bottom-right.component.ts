import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bottom-right',
  templateUrl: './bottom-right.component.html',
  styleUrls: ['./bottom-right.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomRightComponent implements OnInit {
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
