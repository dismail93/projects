import { Component, OnInit, Output } from '@angular/core';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public actionService: ActionService) { }

  ngOnInit(): void {
  }

  action(type:string){
    if(type == 'accept'){
      this.actionService.action.next('accept');
    }
    if(type == 'reject'){
      this.actionService.action.next('reject');
    }
    if(type == 'change'){
      this.actionService.action.next('change');
    }
  }

}
