import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
