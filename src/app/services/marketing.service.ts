import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class MarketingService {
  url = "https://jsonplaceholder.typicode.com/posts";
  baseUrl = "http://127.0.0.1:5000/mybolton/v1/students/register";

  constructor(private http: HttpClient) {
  }

  getMarketers(){
    return this.http.get(this.url);
  }

  createMarketer(data:any):Observable<any>{
    return this.http.post(this.url, data);
  }

  enrolStudent(data:any):Observable<any>{
    return this.http.post(this.baseUrl, data);
  }
}
