import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private baseURL = 'http://127.0.0.1:5000/mybolton/v1/semester/';

  constructor(private http: HttpClient) {



   }
   getPosts(){
      return this.http.get(this.baseURL);
   }
}
