import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular-app';
  name = 'ranjan';
  loadedFeature = 'recipe';

  menuDisplay(feature: string) {
    this.loadedFeature = feature;
  }

}
