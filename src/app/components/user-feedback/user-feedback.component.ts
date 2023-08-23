import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css']
})
export class UserFeedbackComponent implements OnInit {
  submit(feedback: any){
    console.log("Submitted",feedback);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
