import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  navLinks = [
    { path: 'address-form', label: 'address-form' },
    { path: 'dashboard', label: 'dashboard' },
    { path: 'table', label: 'table' },
    { path: 'tree', label: 'tree' },
    { path: 'drag-drop', label: 'drag-drop' },
    { path: 'typography', label: 'typography' }
  ];


  constructor(private breakpointObserver: BreakpointObserver) { }

}
