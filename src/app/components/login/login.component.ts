import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Messaging, provideMessaging } from '@angular/fire/messaging';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup= this.formBuilder.group({
  email: ["", Validators.email],
  password: ["", Validators.required]

});
loginFormLoading: boolean = false;
email:string='';
password:string='';

  constructor(
    private authService:AuthService,
    private router:Router,
    private provideMessaging:Messaging,
    private formBuilder: FormBuilder
  ) { 
    this.createForm();
  }
 

  ngOnInit(): void {
   
  }
  createForm() {
    this.loginForm }

    validateLogin() {
      this.loginFormLoading = true;
      let data = {
        
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
  
      };
    }
  onSubmit(loginForm:any){
  
    console.log(loginForm);
    // this.authService.Login(this.email,this.password)
    // .then(res=>{
    //   this.provideMessaging.notify('Login Successful',{
    //     cssClass:'alert-success',timeout:4000
    //   });
    //   this.router.navigate([/]);
    // })
 
  }


}