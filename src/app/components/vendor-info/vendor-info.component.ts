import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-info',
  templateUrl: './vendor-info.component.html',
  styleUrls: ['./vendor-info.component.css']
})
export class VendorInfoComponent implements OnInit {
  stage= false;

  constructor() { }

  ngOnInit(): void {
  }

  createVendor(form:any){
    this.stage = true;
    console.log('Vendor info', form)
  }

  productCategory(form:any){
    this.stage = true;
    console.log('Product info', form)
  }

}
