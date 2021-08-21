import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-component',
  templateUrl: './confirmation-component.component.html',
  styleUrls: ['./confirmation-component.component.css']
})
export class ConfirmationComponentComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }


  action(type:string){
    var actionType: string;
    actionType = type;
  if(actionType == 'accept'){

  }
if(actionType =='reject'){

}
if(actionType ==  'change'){}

  }
  
}
