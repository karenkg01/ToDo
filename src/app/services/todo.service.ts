import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {Guid} from 'guid-typescript'
import { Session } from '../models/session';
import { AppState } from '../store/app.state.interface';
import { actionOnPageLoad } from '../store/globals/globals.actions';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private store: Store<AppState>) { }

  addToDo(){
    
  }

  OnPageLoad(){
    if(localStorage.length === 0){

      const guid = Guid.create();

      localStorage.setItem(guid.toString(), JSON.stringify(new Session()))
      this.store.dispatch(actionOnPageLoad({session:new Session()}))
    }
  }
}
