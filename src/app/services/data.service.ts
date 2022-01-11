import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'

const apiKey='coinranking668fe4ce1ed77d74ccc57c6665e20e034f184fe469fc66aa'
const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json',
    'X-My-custom-Header':`${apiKey}`,
    'Access-Control-Allow-Origin':'*'

  })
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
private baseUrl='https://api.coinranking.com/v2/coins';
private proxyUrl='https://cors-anywhere.herokuapp.com/';
  constructor(
    private http:HttpClient
  ) { }
  cryptoData(){
    const url=`${this.proxyUrl}${this.baseUrl}`;
    return this.http.get(url,httpOptions).toPromise()
    .then((data)=>{
      return data 
    })
  }
}
