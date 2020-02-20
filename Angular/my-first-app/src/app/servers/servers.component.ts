import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`.online {
    color: red;
}`]
})
export class ServersComponent implements OnInit {

  allowAddServer = false;
  text = 'no ..';
  serverName = 'ibm';
  serverCreated = false;
  servers = ['A1', 'A2'];
  paragraph = [];
  showText = false;

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  onClickThis() {
    this.serverCreated = true;
    this.text = 'YES . name is ' + this.serverName;
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  addParagraph() {
    this.paragraph.push(new Date());
    this.showText = !this.showText;
  }

}
