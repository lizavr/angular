import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
})
export class DisplayDetailsComponent {
  isVisible = false;
  clickTime = '';
  arrClicks = [];

  btnVisibleClick() {
    this.isVisible = !this.isVisible;
    this.clickTime = Date.now().toString();
    this.addInformation(this.clickTime);
  }

  addInformation(clickTime) {
    this.arrClicks.push(clickTime);
  }
}
