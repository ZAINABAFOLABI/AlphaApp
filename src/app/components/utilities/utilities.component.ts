import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Semester } from 'src/app/model/semester';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.css']
})
export class UtilitiesComponent implements OnInit {
  pageTitle="Utilities Analytics";
  dataSource!: MatTableDataSource<Semester>;

  displayedColumns: string[] = [  'semesterId', 'semesterName','semesterCourseId','semesterCourseTitle',
  'startDate', 'endDate', 'action']

  constructor() { }

  ngOnInit(): void {
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
