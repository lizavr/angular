import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() onServerCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output('bpCreated') onBlueprintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  newServerName = '';
  newServerContent = '';
  constructor() {}

  ngOnInit(): void {}
  onAddServer() {
    const server = {
      name: this.newServerName,
      content: this.newServerContent,
    };
    this.onServerCreated.emit(server);
  }

  onAddBlueprint() {
    const server = {
      name: this.newServerName,
      content: this.newServerContent,
    };
    this.onBlueprintCreated.emit(server);
  }
}
