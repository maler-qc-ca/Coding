import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-layout',
  templateUrl: './test-layout.component.html',
  styleUrls: ['./test-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
