import { Component, Input, OnInit } from '@angular/core';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  status!: string;
  actionType$ = this.actionService.action$;

  

  @Input() action!: string;

  constructor(public actionService: ActionService) { }

  ngOnInit(): void {
  }

  

}
