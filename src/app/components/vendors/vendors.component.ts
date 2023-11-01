import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { HttpClient } from '@angular/common/http';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Semester } from 'src/app/model/semester';


@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css'],

})
export class VendorsComponent implements OnInit {

  pageTitle="Vendors Analytics";


  listSemesterDetails!:any;
  getSemester: any;
  baseUrl= 'http://127.0.0.1:5000/mybolton/v1/semester/';
  columns = [];
  ColumnMode = ColumnMode;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;





  constructor(private api:VendorService, private http:HttpClient) { }

  ngOnInit(): void {
    this.semesterData();
    this.fetchSemester();




  }






  // dataSource = ELEMENT_DATA;
  dataSources!: MatTableDataSource<Semester>;


  fetchSemester(){
    this.api.getSemesterData().subscribe(data=>{
      this.listSemesterDetails = data
      this.dataSources = new MatTableDataSource(this.listSemesterDetails.data)
      this.dataSources.paginator = this.paginator;
      this.dataSources.sort = this.sort;
      console.log(this.dataSources)
      console.log("List of semester details", this.listSemesterDetails.data)
    })
  }

  // ngAfterViewInit() {
  //   this.dataSources.paginator = this.paginator;
  //   this.dataSources.sort = this.sort;
  // }





  // displayedColumns: string[] = ['semesterCourseId','semesterCourseTitle','endDate','semesterId',
  // 'semesterName','startDate'];

  displayedColumns: string[] = [  'semesterId', 'semesterName','semesterCourseId','semesterCourseTitle',
  'startDate', 'endDate', 'action']

  public semesterData(){
    this.http.get('http://127.0.0.1:5000/mybolton/v1/semester/').subscribe((data)=>{
      console.log(data);
      this.getSemester = data;
    })
  }

  public deletedModule(courseId:any){
    this.api.deleteModule(courseId).subscribe((data)=>{
      console.log("Module deleted", data);

    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSources.filter = filterValue.trim().toLowerCase();
    if (this.dataSources.paginator) {
      this.dataSources.paginator.firstPage();
    }
  }

}

