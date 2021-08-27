import { Component, OnInit, ViewChild } from '@angular/core';
import { DateComponent } from '../date/date.component';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {


  @ViewChild(DateComponent)
  dateComponent!: DateComponent;

  constructor() { }

  ngOnInit(): void {
  }
  public submit(){
    debugger;
    if(this.dateComponent.myForm.controls.date.invalid){
      this.dateComponent.myForm.controls.date.markAsTouched();
    }

  }

}
