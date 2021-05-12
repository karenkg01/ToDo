import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToDo } from 'src/app/models/toDo';
import { TodoService } from 'src/app/services/todo.service';
import { AppState } from 'src/app/store/app.state.interface';
import { sessionSelected } from 'src/app/store/globals/globals.selectors';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoName: string = "";
  toDoItems:ToDo[] = []

  constructor(private todoservice:TodoService, private store: Store<AppState>) { 

  }

  ngOnInit(): void {
    //takes selector from reducer (getting a value from the store)
    //observable, if that value changes, you get the newest change
    this.store.select(sessionSelected).subscribe((session)=>{
      this.toDoItems = session.toDos
    })
  }

  addToDo(){
    this.todoservice.addToDo({name: this.todoName, toDoId:""} as ToDo)
    

  }
}
