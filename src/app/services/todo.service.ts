import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {Guid} from 'guid-typescript'
import { Session } from '../models/session';
import { ToDo } from '../models/toDo';
import { User } from '../models/user';
import { AppState } from '../store/app.state.interface';
import { actionOnAddingNewItem, actionOnPageLoad } from '../store/globals/globals.actions';
import { sessionSelected } from '../store/globals/globals.selectors';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private store: Store<AppState>) { }

  addToDo(toDoItem:ToDo){
    //take the toDoItem  put it in the store using our action
    this.store.dispatch(actionOnAddingNewItem({toDos:toDoItem})) //JSON.parse takes a string and puts it into an object.
    this.store.select(sessionSelected).subscribe((session)=>{
      localStorage.setItem("1", JSON.stringify(session))
    })

  }

  OnPageLoad(){
    if(localStorage.length === 0){

      const guid = Guid.create();
      const session = {user:{userId:Guid.create().toString()}, toDos:[]}

      localStorage.setItem("1", JSON.stringify(session)) //JSON.stringify take object and puts it into a string
      //takes new session and puts it into the store
      this.store.dispatch(actionOnPageLoad({session: session}))
    }else {
      //takes session from local storage and..
      const session = localStorage.getItem(localStorage.key(0))
      //puts it into the store
      this.store.dispatch(actionOnPageLoad({session: JSON.parse(session)})) //JSON.parse takes a string and puts it into an object.
    }
  }
}
