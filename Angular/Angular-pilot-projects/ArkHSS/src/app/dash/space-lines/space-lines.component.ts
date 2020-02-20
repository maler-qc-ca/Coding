import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-space-lines',
  templateUrl: './space-lines.component.html',
  styleUrls: ['./space-lines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpaceLinesComponent implements OnInit {
  data =   {
    "firstDataset": [
      -80,
      30,
      -43,
      19,
      -24,
      -59,
      50
    ],
    "secondDataset": [
      -60,
      -2,
      -6,
      20,
      44,
      -34,
      -56
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
