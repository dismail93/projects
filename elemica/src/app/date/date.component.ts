import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

myForm!:FormGroup
  
  constructor(public fb: FormBuilder) {
  
  
   }

   



  ngOnInit(): void {
    this.myForm = this.fb.group({
      date: [
        ['Date is required',Validators.required,]
      ]
    });
  }

}
