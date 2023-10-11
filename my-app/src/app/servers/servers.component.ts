import { Component } from '@angular/core';

@Component({
  // selector: 'app-servers', as tag
  // selector: '[app-servers]', attribute
  selector: '.app-servers',

  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {}
