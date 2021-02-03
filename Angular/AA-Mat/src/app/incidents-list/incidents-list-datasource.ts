import { SelectionModel } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface IncidentsListItem {
  IncidentSummary: string;
  IncidentID: number;
  Severity: string;
  Classifications: string;
  ImpactedAssets: number;
  DomainOffice: string;
  LastImtervention: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: IncidentsListItem[] = [
  {
    IncidentSummary: 'Lorem ipsum dolor',
    IncidentID: 1208943,
    Severity: 'High',
    Classifications: 'Malware',
    ImpactedAssets: 4,
    DomainOffice: 'Montreal (1)',
    LastImtervention: 'Lorem ipsum dolor sit',
  },
  {
    IncidentSummary: 'Lorem ipsum dolor',
    IncidentID: 1208944,
    Severity: 'Medium',
    Classifications: 'Malware',
    ImpactedAssets: 4,
    DomainOffice: 'Montreal (1)',
    LastImtervention: 'Lorem ipsum dolor sit',
  },
  {
    IncidentSummary: 'Lorem ipsum dolor',
    IncidentID: 1208945,
    Severity: 'Low',
    Classifications: 'Malware',
    ImpactedAssets: 4,
    DomainOffice: 'Montreal (1)',
    LastImtervention: 'Lorem ipsum dolor sit',
  },
  {
    IncidentSummary: 'Lorem ipsum dolor',
    IncidentID: 1208946,
    Severity: 'Medium',
    Classifications: 'Malware',
    ImpactedAssets: 4,
    DomainOffice: 'Montreal (1)',
    LastImtervention: 'Lorem ipsum dolor sit',
  },
  {
    IncidentSummary: 'Lorem ipsum dolor',
    IncidentID: 1208947,
    Severity: 'Low',
    Classifications: 'Malware',
    ImpactedAssets: 4,
    DomainOffice: 'Montreal (1)',
    LastImtervention: 'Lorem ipsum dolor sit',
  },
  {
    IncidentSummary: 'Lorem ipsum dolor',
    IncidentID: 1208948,
    Severity: 'Medium',
    Classifications: 'Malware',
    ImpactedAssets: 4,
    DomainOffice: 'Montreal (1)',
    LastImtervention: 'Lorem ipsum dolor sit',
  },
  {
    IncidentSummary: 'Lorem ipsum dolor',
    IncidentID: 1208949,
    Severity: 'High',
    Classifications: 'Malware',
    ImpactedAssets: 4,
    DomainOffice: 'Montreal (1)',
    LastImtervention: 'Lorem ipsum dolor sit',
  },
  {
    IncidentSummary: 'Lorem ipsum dolor',
    IncidentID: 1208950,
    Severity: 'Low',
    Classifications: 'Malware',
    ImpactedAssets: 4,
    DomainOffice: 'Montreal (1)',
    LastImtervention: 'Lorem ipsum dolor sit',
  },
  {
    IncidentSummary: 'Lorem ipsum dolor',
    IncidentID: 1208951,
    Severity: 'High',
    Classifications: 'Malware',
    ImpactedAssets: 4,
    DomainOffice: 'Montreal (1)',
    LastImtervention: 'Lorem ipsum dolor sit',
  },
  {
    IncidentSummary: 'Lorem ipsum dolor',
    IncidentID: 1208952,
    Severity: 'Medium',
    Classifications: 'Malware',
    ImpactedAssets: 4,
    DomainOffice: 'Montreal (1)',
    LastImtervention: 'Lorem ipsum dolor sit',
  },
  {
    IncidentSummary: 'Lorem ipsum dolor',
    IncidentID: 1208953,
    Severity: 'High',
    Classifications: 'Malware',
    ImpactedAssets: 4,
    DomainOffice: 'Montreal (1)',
    LastImtervention: 'Lorem ipsum dolor sit',
  },
  {
    IncidentSummary: 'Lorem ipsum dolor',
    IncidentID: 1208954,
    Severity: 'Medium',
    Classifications: 'Malware',
    ImpactedAssets: 4,
    DomainOffice: 'Montreal (1)',
    LastImtervention: 'Lorem ipsum dolor sit',
  },
];

/**
 * Data source for the IncidentsList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class IncidentsListDataSource extends DataSource<IncidentsListItem> {
  data: IncidentsListItem[] = EXAMPLE_DATA;
  selection = new SelectionModel<IncidentsListItem>(true, []);
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IncidentsListItem): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.IncidentID + 1
    }`;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<IncidentsListItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange,
    ];

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: IncidentsListItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: IncidentsListItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'IncidentSummary':
          return compare(a.IncidentSummary, b.IncidentSummary, isAsc);
        case 'IncidentID':
          return compare(+a.IncidentID, +b.IncidentID, isAsc);
        case 'Severity':
          return compare(a.Severity, b.Severity, isAsc);

        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
