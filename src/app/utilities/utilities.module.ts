import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from '../components/home/home.component';
import { utilityReducer } from './store/utility.reducer';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    UtilitiesRoutingModule,
    StoreModule.forFeature('myUtilities', utilityReducer)
  ]
})
export class UtilitiesModule { }
