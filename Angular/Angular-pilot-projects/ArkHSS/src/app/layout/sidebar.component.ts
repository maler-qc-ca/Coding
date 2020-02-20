import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  menuItems: NbMenuItem[] = [
    {
      title: 'Test',
      link: '/Test',
      children: null
    },
    {
      title: 'Dash',
      link: '/Dash',
      children: null
    },
    {
      title: 'Sub',
      link: '/Sub',
      children: null
    },
    {
      title: 'New One',
      link: '/New-One',
      children: null
    }
  ];

}
