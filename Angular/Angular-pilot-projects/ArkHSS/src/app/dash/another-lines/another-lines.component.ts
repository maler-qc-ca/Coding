import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-another-lines',
  templateUrl: './another-lines.component.html',
  styleUrls: ['./another-lines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnotherLinesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
