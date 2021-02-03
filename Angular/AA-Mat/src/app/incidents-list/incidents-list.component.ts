import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {
  IncidentsListDataSource,
  IncidentsListItem,
} from './incidents-list-datasource';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-incidents-list',
  templateUrl: './incidents-list.component.html',
  styleUrls: ['./incidents-list.component.css'],
})
export class IncidentsListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<IncidentsListItem>;
  dataSource: IncidentsListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'select', 
    'IncidentSummary',
    'IncidentID',
    'Severity',
    'Classifications',
    'ImpactedAssets',
    'DomainOffice',
    'LastImtervention',
  ];

  foods: Food[] = [
    { value: 'week', viewValue: 'This Week' },
    { value: 'month', viewValue: 'This Month' },
    { value: 'year', viewValue: 'This Year' },
  ];

  ngOnInit() {
    this.dataSource = new IncidentsListDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
