import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', attribute
  // selector: '.app-servers',

  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'test';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created' + '' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
