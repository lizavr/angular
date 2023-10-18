import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

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
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}
  onAddServer(nameInput: HTMLInputElement) {
    this.onServerCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    const server = {
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    };
    this.onBlueprintCreated.emit(server);
  }
}
