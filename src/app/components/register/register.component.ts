import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register(signup:any){
    console.log("Sign up successful", signup);
    alert("Details have been taken, verification will take 24 hours.")
  }

  constructor() { }


  ngOnInit(): void {
  }



}
