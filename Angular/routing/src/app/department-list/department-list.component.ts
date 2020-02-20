import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
      department-list works!
      <ul>
        <li (click)="onSelect(dept)" [class.selected]="isSelected(dept)" *ngFor="let dept of departments">
        {{ dept.id }} {{ dept.name }}
        </li>
      </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id":1, "name": "NAME 1"},
    {"id":2, "name": "NAME 2"},
    {"id":3, "name": "NAME 3"},
    {"id":4, "name": "NAME 4"},
    {"id":5, "name": "NAME 5"}
  ];

  public selectedId;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(dept){
    //this.router.navigate(['/departments', dept.id ]);
    this.router.navigate([dept.id ], {relativeTo: this.route});
  }

  isSelected(dept){
    return dept.id === this.selectedId;
  }

}
