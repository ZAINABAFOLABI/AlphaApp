import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marketing } from 'src/app/model/marketing';
import { Observable } from 'rxjs';
import { MarketingService } from 'src/app/services/marketing.service';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {
  pageTitle = "Marketing Analytics";
  marketers!:any;


  constructor(private http:HttpClient, private marketingService: MarketingService) {
    this.marketingService.getMarketers().subscribe((data:any) => {
      this.marketers = data;
    })
    }

    updateData(data:any){
      console.log(data);
      this.marketingService.createMarketer(data).subscribe((result:any)=>{
        console.log(result)
      })

      // console.log("Marketing form submitted", marketing)
    }

    postMarketer(data:any){
      console.log(data);
      this.marketingService.createMarketer(data).subscribe((result:any)=>{
        console.log(result)

      })
    }

    studentRecord(data:any){
      console.log(data)
      this.marketingService.enrolStudent(data).subscribe((response:any)=>{
        console.log(response);
      })
    }
  ngOnInit(): void {

  }

  }





