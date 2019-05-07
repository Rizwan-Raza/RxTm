import { Component, OnInit } from '@angular/core';
import { GitDataService } from '../git-data.service';

@Component({
  selector: 'rx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  uData: any;

  constructor(private gitData: GitDataService) {
    this.gitData.getData("https://api.github.com/users/Rizwan-Raza").subscribe(data => {
      this.uData = data;
    });
  }

  ngOnInit() {
  }

}
