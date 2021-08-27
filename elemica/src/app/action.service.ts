import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  public action = new BehaviorSubject<string>('accept');    
  public action$ = this.action.asObservable(); 

  constructor() { }
}
