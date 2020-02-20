import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-parent-space',
  templateUrl: './parent-space.component.html',
  styleUrls: ['./parent-space.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentSpaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
