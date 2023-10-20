import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFeature = 'recipe';
  value = '1';

  onNavigate(feature: string) {
    console.log(`OnNavigate: ${feature}`);
    this.loadedFeature = feature;
  }
}
