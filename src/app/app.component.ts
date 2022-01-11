import { Component } from '@angular/core';

import { Chart,registerables  } from 'chart.js';

import { getMaxListeners } from 'process';


import { User } from 'src/app/model/user';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result:any;
  coinPrice:any;
  coinName:any;
  chart:any=[];

  title = 'angularalphaproject';
  constructor(private service:DataService){

  }
}
