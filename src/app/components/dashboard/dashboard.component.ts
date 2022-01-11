import { Component, OnInit } from '@angular/core';
import { Chart,registerables  } from 'chart.js';

import { getMaxListeners } from 'process';


import { User } from 'src/app/model/user';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent 
implements OnInit {

  result:any;
  coinPrice:any;
  coinName:any;
  chart:any=[];

  
user="Chidimma Nwanya";
client:User;
  constructor(private service:DataService) {
    Chart.register(...registerables)
   
    this.client={
      firstName:'Chidimma',
      lastName:'Nwanya',
      email:'zainab.o.afolabi@getMaxListeners.com',
      password:'AlphaApp',
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

  ngOnInit() {
   this.service.cryptoData().then((res)=>{
     this.result=res
     this.coinPrice=this.result.data.coins.map((coin:any)=>coin.price)
     this.coinName=this.result.data.coins.map((coin:any)=>coin.name)
     console.log(this.coinPrice,this.coinName);

     //Show Chart data
   this.chart=new Chart('canvas',{
    type:'line',
    data: {
     labels: this.coinName,
     datasets: [
       {
         label: 'Coin Price',
         data: this.coinPrice,
         fill:false,
         borderWidth: 3,
         backgroundColor:'rgba(93, 175,89,0.1)',
         borderColor:'#3e95cd'
     },
   ],
 },
  });
 

   });


  //  //Show Chart data
  //  this.chart=new Chart('canvas',{
  //    type:'line',
  //    data: {
  //     labels: this.coinName,
  //     datasets: [
  //       {
  //         label: 'Coin Price',
  //         data: this.coinPrice,
  //         fill:false,
  //         borderWidth: 3,
  //         backgroundColor:'rgba(93, 175,89,0.1)',
  //         borderColor:'#3e95cd'
  //     },
  //   ],
  // },
  //  });
  // } 

}

}