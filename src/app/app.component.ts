import { Component } from '@angular/core';
import { GitDataService } from './git-data.service';

@Component({
  selector: 'rx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rx-tm';
  uData: any;
  constructor() {}
}
