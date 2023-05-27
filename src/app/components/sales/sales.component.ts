import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {


  columns = [
    {name: 'Number', prop: 'number'},
    {name: 'Product Category', prop: 'productCategory'},
    {name: 'Sales Budget', prop: 'salesBudget'},
    {name: 'Actual Sales', prop: 'actualSales'},
    {name: 'Variance', prop:'variance'},
    {name: 'Period', prop: 'period'},
    // {name: '', prop: 'usage'},
    {name: '', prop: 'action'},
  ];

  data = [
    {name: 'Number', value:'001'},
    {name: 'Product Category', value:'Shoes'}
  ]

  ColumnMode = ColumnMode;

  constructor() { }

  ngOnInit(): void {
  }

}
