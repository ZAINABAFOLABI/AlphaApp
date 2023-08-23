import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sales-record-modal',
  templateUrl: './sales-record-modal.component.html',
  styleUrls: ['./sales-record-modal.component.css']
})
export class SalesRecordModalComponent implements OnInit {
  @Input() header = '';
  @Input() subheader = '';

  constructor() { }

  ngOnInit(): void {
  }

}
