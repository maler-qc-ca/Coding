import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-do-spa',
  templateUrl: './do-spa.component.html',
  styleUrls: ['./do-spa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoSpaComponent implements OnInit {
  data =   [
    {
      "value": 335,
      "name": "Germany"
    },
    {
      "value": 310,
      "name": "France"
    },
    {
      "value": 234,
      "name": "Canada"
    },
    {
      "value": 135,
      "name": "Russia"
    },
    {
      "value": 758,
      "name": "USA"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
