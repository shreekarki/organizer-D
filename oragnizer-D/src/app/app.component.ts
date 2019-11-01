import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  events: string[] = [];
  opened: boolean;
  title = 'oragnizer-D';
}
