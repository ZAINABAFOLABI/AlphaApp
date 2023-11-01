import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Semester } from '../model/semester';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VendorService {
  url = 'http://127.0.0.1:5000/mybolton/v1/semester/';


  constructor(private http:HttpClient) { }
  getSemesterData(): Observable<any>{
    return this.http.get(this.url);

  }

  deleteModule(id:any): Observable<any>{
    return this.http.delete(this.url + 'delete'  + '/' + id);
  }

}
