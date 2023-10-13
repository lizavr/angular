import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styles: [
    `
      .backgroundFromFive {
        backgroundcolor: blue;
        color: white;
      }
    `,
  ],
})
export class DisplayDetailsComponent {
  isVisible = false;
  clickTime = '';
  arrClicks = [];
  // count = 1;
  backgroundColor = 'not';

  btnVisibleClick() {
    this.isVisible = !this.isVisible;
    this.clickTime = Date.now().toString();
    this.addInformation(this.clickTime);
    // if (this.count > 5) {
    //   this.backgroundColor = 'yes';
    // }
    // this.count += 1;
  }

  addInformation(clickTime) {
    this.arrClicks.push(clickTime);
  }
}
