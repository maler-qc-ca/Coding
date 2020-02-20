import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
