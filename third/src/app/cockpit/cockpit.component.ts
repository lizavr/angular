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
  newServerContent = '';
  constructor() {}

  ngOnInit(): void {}
  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.onServerCreated.emit({
      name: nameInput.value,
      content: contentInput.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    const server = {
      name: nameInput.value,
      content: contentInput.value,
    };
    this.onBlueprintCreated.emit(server);
  }
}
