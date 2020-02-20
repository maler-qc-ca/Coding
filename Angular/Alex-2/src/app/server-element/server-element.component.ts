import { Component, OnInit, Input, ViewEncapsulation, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @ContentChild('conXXX') ccc: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('>>>>>' + this.ccc.nativeElement.textContent)
  }

  ngAfterContentInit() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('|||||||||||||' + this.ccc.nativeElement.textContent)
    
  }

}
