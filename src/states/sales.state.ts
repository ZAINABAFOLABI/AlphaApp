import {Selector, State, StateContext} from '@ngxs/store';
// import {EmitterAction, Receiver} from "@ngxs/store";
import {Injectable, Injector} from "@angular/core";

export interface SalesModel{
  amountTotal: number,
  date: string,
  items: any[]

}
