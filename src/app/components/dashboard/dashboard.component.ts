import { Component, OnInit } from '@angular/core';
import { Chart, ChartType,ChartOptions,ChartDataset } from 'chart.js';
import { DatePipe } from '@angular/common';
import { baseUrl } from 'src/environments/environment';
import { User } from 'src/app/model/user';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent
implements OnInit {
  today = new Date();
  message = '';



  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  // public pieChartLabels: Label[] = ['PHP', '.Net', 'Java'];
  // public pieChartData: SingleDataSet = [50, 30, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

user="Alpha Admin";
client:User;
  constructor(public datePipe:DatePipe, private http: HttpClient) {
    let currentDate = this.datePipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
    console.log(currentDate);
    // monkeyPatchChartJsTooltip();
    // monkeyPatchChartJsLegend();
    this.client={
      firstName:'Alpha',
      lastName:'Admin',
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

    this.http.get(`${baseUrl}login`).subscribe(
      (res:any)=>{
        this.message = `Hi ${res.name}`;

      }
    )

  }

}

