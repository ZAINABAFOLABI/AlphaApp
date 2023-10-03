import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { SalesService } from 'src/app/services/sales.service';
import { Chart, registerables } from 'chart.js';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

interface ItemModel {
 itemCategory:string,
  itemName: string,
  unitPrice: number,
  quantity: number,
  total: number
}

export interface SalesData {
  id: string;
  category: string;
  date: string;
  salesTarget: string;
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
const salesTargets: string[] = [
  '40000',
  '800000',
  '70000',
  '6400000',
  '653000',
  '7000000',
  '8500000',
  '9200000',
];

const actualSales: string[] = [
  '22000',
  '820000',
  '64000',
  '300000',
  '520000',
  '50000',
  '750000'
]

const salesVariance: string[] = [
  '10000',
  '3456',
  '4500',
  '5600',
  '2200',
  '42000',
  '13000'
]

const date: string[] = [
  'Jan 2023',
  'Feb 2023',
  'Mar 2023',
  'Apr 2023',
  'May 2023',
  'Jun 2023',
  'Jul 2023'
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
  today = new Date();
  items: ItemModel[] = [];
  addItem = false;
  grandSalesForm: FormGroup;
  salesRecordForm: FormGroup;
  createdDate?: string;
  recordingSales = false;
  itemsToDelete: number[] = [];
  grandTotal = 0;
  chart: any = [];
  displayedColumns: string[] =
   ['id', 'category', 'salesTarget', 'actualSales', 'variance', 'date'];
   dataSource!: MatTableDataSource<SalesData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  submit(CategoryForm: any){
    console.log("Category set", CategoryForm);
  }

  save(form:any){
    console.log('form', form)
  }

  currentDate= new Date;

  recordSales() {
    this.recordingSales = true;
    this.prepareFormForSubmit();
    this.grandSalesForm.value;
    // this.creatInvoice.emit(this.grandSalesForm
    //   .value).subscribe(() => {
    //   this.creatingInvoice = false;
    // });
    alert("Sales record was successful.");
    console.log("Items sold",this.items, this.grandSalesForm.value);
  }

  reset(){
    this.grandSalesForm.reset();
    this.salesRecordForm.reset();

  }

  prepareFormForSubmit() {
    this.grandSalesForm.patchValue({
      items: [],
      amountTotal: this.grandTotal,
      salesDate:this.datePipe.transform(this.createdDate, 'yyyy-MM-dd')
    });
    this.items.forEach((i) => {
      (this.grandSalesForm.controls['items'].value as Array<any>).push(i);
    })
  }

  constructor(private salesService:SalesService,
     private fb: FormBuilder, private datePipe: DatePipe,) {
    this.salesService.getPosts().subscribe(data =>{
      console.log(data);
    });

    this.salesRecordForm = this.fb.group({
      itemCategory: [''],
      itemName: [''],
      quantity: [''],
      total: [''],
      unitPrice: ['']
    });

    this.grandSalesForm = this.fb.group({
      salesDate: [''],
      amountTotal: [''],
      items: this.fb.array([])
    })

    this.createdDate = (new Date()).toDateString();

  }

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            barPercentage: 0.8,
            categoryPercentage: 0.5,
            borderRadius: 7,
            label: 'Sales target',
            backgroundColor: 'red',
            data: [57, 48, 23, 56, 46, 44, 56, 60, 52, 40, 52, 55],
          },
          {
            barPercentage: 0.8,
            categoryPercentage: 0.5,
            borderRadius: 7,
            label: 'Actual sales',
            backgroundColor: 'green',
            data: [25, 49, 57, 48, 39, 52, 63, 44, 30, 61, 52, 44],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  addNewItem() {
    this.items.push(this.salesRecordForm.value);
    this.getGross();
    this.salesRecordForm.reset();
  }

  toggleAddItemForm() {
    this.addItem = !this.addItem;
  }

  getTotal(item: ItemModel) {
    return item.unitPrice * item.quantity;
  }

  getGross() {
    let total = 0;
    const newItems: any[] = [];
    for (const item of this.items) {
      newItems.push({...item, unitPrice: +item.unitPrice, total: item.unitPrice * item.quantity})
      total += item.unitPrice * item.quantity;
    }
    this.items = newItems;
    this.grandTotal = total;
  }

  removeItems() {
    this.items = this.items.filter((d, i) => this.itemsToDelete.indexOf(i) === -1);
    this.itemsToDelete = [];
  }

  checkItems(i?: number) {
    if (i !== undefined) {
      this.itemsToDelete.indexOf(i) < 0 ? this.itemsToDelete.push(i) : this.itemsToDelete = this.itemsToDelete.filter(d => i !== d);
    } else {
      if (!this.allChecked()) {
        this.items.forEach((d, i) => {
          if (this.itemsToDelete.indexOf(i) < 0) {
            this.itemsToDelete.push(i);
          }
        })
      } else {
        this.itemsToDelete = [];
      }
    }
  }

  allChecked() {
    if (this.items.length) {
      return this.items.every((e, i) => this.itemsToDelete.indexOf(i) > -1);
    } else {
      return false;
    }
  }

  /** Builds and returns a new User. */
/** Builds and returns a new User. */
createNewSalesData(id: number): SalesData {
  const category =
    Categories[Math.round(Math.random() * (Categories.length - 1))] +
    ' ' +
    Categories[Math.round(Math.random() * (Categories.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    category: category,
    salesTarget: salesTargets[Math.round(Math.random() * (salesTargets.length - 1))],
    actualSales: actualSales[Math.round(Math.random() * (actualSales.length - 1))],
    variance: salesVariance[Math.round(Math.random() * (actualSales.length - 1))],
    date: date[Math.round(Math.random() * (actualSales.length - 1))]

  };

}}
