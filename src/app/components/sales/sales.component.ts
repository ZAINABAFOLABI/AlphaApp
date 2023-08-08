import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { SalesService } from 'src/app/services/sales.service';



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
  // providers: [SalesService]
})
export class SalesComponent implements OnInit {
  pageTitle="Sales Analytics";
  subHeading="All your sales budget performance";


  // columns = [
  //   {name: 'Number', prop: 'number'},
  //   {name: 'Product Category', prop: 'productCategory'},
  //   {name: 'Sales Budget', prop: 'salesBudget'},
  //   {name: 'Actual Sales', prop: 'actualSales'},
  //   {name: 'Variance', prop:'variance'},
  //   {name: 'Period', prop: 'period'},
  //   // {name: '', prop: 'usage'},
  //   {name: '', prop: 'action'},
  // ];

  // data = [
  //   {name: 'Number', value:'001'},
  //   {name: 'Product Category', value:'Shoes'}
  // ]

  // ColumnMode = ColumnMode;

  constructor(private salesService:SalesService) {
    this.salesService.getPosts().subscribe(data =>{
      console.log(data);
    })

  }

  ngOnInit(): void {
  }

}
