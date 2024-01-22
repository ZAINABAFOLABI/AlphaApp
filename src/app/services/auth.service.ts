import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { provideAuth,getAuth,signInWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { FirebaseSignInProvider } from '@firebase/util';
import { Observable } from 'rxjs';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://127.0.0.1:5000/mybolton/v1/auth/login';
  loggedIn: boolean = true;


  constructor(
    // private provideAuth:Auth,
    public http:HttpClient
  ) {}
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   return true;
  // }

    allowLogin(credentials:any){

      return this.http.post(`${baseUrl}login`, credentials).toPromise(); }


      logOut(){
        return this.loggedIn = false;
      }

      login({email, password}:{email:string,password:string}){
        return this.http.post('login',{
          email,password,
        }).toPromise();
      }

      isAuthenticated(){
        return this.loggedIn;
      }





   }



