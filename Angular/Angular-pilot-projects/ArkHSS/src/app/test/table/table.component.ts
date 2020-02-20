import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  source =   [
    {
      "id": 1,
      "fullName": "Danielle Kennedy",
      "userName": "danielle.kennedy",
      "email": "danielle_91@example.com"
    },
    {
      "id": 2,
      "fullName": "Russell Payne",
      "userName": "russell.payne",
      "email": "russell_88@example.com"
    },
    {
      "id": 3,
      "fullName": "Brenda Hanson",
      "userName": "brenda.hanson",
      "email": "brenda97@example.com"
    },
    {
      "id": 4,
      "fullName": "Nathan Knight",
      "userName": "nathan.knight",
      "email": "nathan-85@example.com"
    }
  ];
  settings =   {
    "columns": {
      "id": {
        "title": "ID",
        "filter": true
      },
      "fullName": {
        "title": "Full Name",
        "filter": true
      },
      "userName": {
        "title": "User Name",
        "filter": true
      },
      "email": {
        "title": "Email",
        "filter": true
      }
    },
    "delete": {
      "confirmDelete": true
    },
    "add": {
      "confirmCreate": true
    },
    "edit": {
      "confirmSave": true
    },
    "actions": {
      "add": true,
      "edit": true,
      "delete": true
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
