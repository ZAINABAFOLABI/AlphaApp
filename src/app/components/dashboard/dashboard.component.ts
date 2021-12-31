import { Component, OnInit } from '@angular/core';
import { Chart, ChartType,ChartOptions,ChartDataset } from 'chart.js';


import { User } from 'src/app/model/user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent 
implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  
  // public pieChartLabels: Label[] = ['PHP', '.Net', 'Java'];
  // public pieChartData: SingleDataSet = [50, 30, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  
user="Chidimma Nwanya";
client:User;
  constructor() {
    // monkeyPatchChartJsTooltip();
    // monkeyPatchChartJsLegend();
    this.client={
      firstName:'Chidimma',
      lastName:'Nwanya',
      annualPlayBudget:{
        totalPlay:50000000,
        totalSpent:32000000,
        balance:18000000
      },
      annualWorkBudget:{
        totalWork:20000000,
        totalSpent:10000000,
        balance:10000000
      },
      totalCards:{
        cardsInUse:342383,
        totalCards:392383,
        inactive:50000
    
      }
    }
   }

  ngOnInit(): void {
  }

}

