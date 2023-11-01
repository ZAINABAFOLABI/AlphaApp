import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';



@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.css']
})
export class CashFlowComponent implements OnInit {
  notifications = 0;
  minDate = new Date;
  maxDate = new Date(2023,11, 2);

// dateFilter = (Date: { getDay: () => any; }) =>{
//   const day = Date.getDay();
//   return day != 0 && day !=6;
// }

dateFilter = (d: Date | null): boolean => {
  const day = (d || new Date()).getDay();
  // Prevent Saturday and Sunday from being selected.
  return day !== 0 && day !== 6;
}
  selectedValue!: string;
  stage= false;
  opened = false;
  displaySpinner = false;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  logChange(index:any){
    console.log(index);
  }

  save(form:any){
    console.log('form', form);
    this.stage = true;
  }



  fetchData(){
    this.displaySpinner = true;
    setTimeout(() =>{
    this.displaySpinner = false;
    }, 5000)
  }
  pageTitle="Cash-flow Analytics";
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
