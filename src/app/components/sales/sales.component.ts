import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { SalesService } from 'src/app/services/sales.service';
import { Chart, registerables } from 'chart.js';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface SalesData {
  id: string;
  productCategory: string;
  date: string;
  salesBudget: string;
  actualSales: string;
  variance?: string;

}

/** Constants used to fill up our data base. */
const Categories: string[] = [
  'Ladies footwear',
  'Ladies Underwear',
  'Ladies clothing',
  'Baby wears',
  'Toys',
  'Children shoes',
  'Mens wears',
  'Mens shoes',
];
const budget: string[] = [
  '40000',
  '800000',
  '70000',
  '6400000',
  '653000',
  '7000000',
  '8500000',
  '9200000',
];

const sales: string[] = [
  '22000',
  '820000',
  '64000',
  '300000',
  '520000',
  '50000',
  '750000'
]



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
  // providers: [SalesService]
})
export class SalesComponent implements OnInit {
  pageTitle="Sales Analytics";
  subHeading="All your sales budget performance";
  chart: any = [];
  submit(CategoryForm: any){
    console.log("Category set", CategoryForm);
  }

  save(form:any){
    console.log('form', form)
  }

  currentDate= new Date;



  // displayedColumns: string[] = ['id', 'productCategory', 'date', 'salesBudget', 'actualSales', 'variance'];
  // dataSource!: MatTableDataSource<SalesData>;
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  recordSales(salesForm:any){
    console.log("sales record", salesForm)
  }

  // submit(productCategoryForm:any){
  //   console.log("Category has been set", productCategoryForm)
  // }




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
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

}
