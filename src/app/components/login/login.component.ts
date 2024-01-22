import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { baseUrl } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { Messaging, provideMessaging } from '@angular/fire/messaging';
import { Router  } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';

export interface Login{
  emailAddress:String,
  pass: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data!:any;
responseData!:any;



  constructor(
    private authService:AuthService,
    private router:Router,
    private http:HttpClient,
    private provideMessaging:Messaging) {}


  ngOnInit(): void {



  }


  // auth(login:any){
  //   if(login.valid){
  //     this.authService.allowLogin(login.value).subscribe(result =>{
  //       if(result.success){
  //         console.log(result);
  //       }else{
  //         alert(result.error);
  //       }
  //     })
  //   }
  // }


  enableLogin(login:any){
    console.log(login)
    this.http.post(`${baseUrl}login`, login.value, {withCredentials:true} ).subscribe((res:any)=>{
      console.log('Form data',login)
      console.log(res.lecturer.firstName);
      // AuthInterceptor.access = res.lecturer.access;
      // if(res.lecturer.access){
      //  return true;
      // }else{
      //   return false;
      // }

    })
  }

//   auth(login:any){
//     console.log("Loginform", login)
//     if (login.valid)

//     this.authService.allowLogin(login).subscribe(result=>{
//       console.log("Testing")
//       if(result.success){
//         console.log(result);
//         alert(result.message);
//       }else{
//         alert(result.message);
//       }
//     } )
// }

}
