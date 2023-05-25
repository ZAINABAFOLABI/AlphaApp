import { AfterContentChecked, AfterViewInit,Input,ViewChild, Component, OnInit } from '@angular/core';
import { DatatableFooterDirective } from '@swimlane/ngx-datatable';

@Component({
  selector: 'alpha-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit, AfterContentChecked {
  @Input() header = '';
  @ViewChild(DatatableFooterDirective) table?: DatatableFooterDirective;
  @Input() subheader = '';
  @Input() loading?: boolean = false;
  @Input() noDataTitle = 'No activity found';
  @Input() noDataSubtitle = '';
  @Input() data: any[] = [];
  @Input() tableFooter?:DatatableFooterDirective;
  @Input() mainClass = '';
  @Input() containerClass = '';
  @Input() sharpEdges = false;
  @Input() hideTableHeader = false;




  constructor() { }

  ngAfterContentChecked(): void {

  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

}
