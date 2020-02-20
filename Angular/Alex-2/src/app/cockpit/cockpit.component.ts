import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  newServerName = '';
  newServerContent = '';

  @ViewChild('inputRef') inputRefIn: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onServerAuto(){
    console.log(this.inputRefIn.nativeElement.value);
  }

  onServer(input: HTMLInputElement){
    console.log('>>'+input.value);
  }

  onAddServer() {
    this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
  }

}
