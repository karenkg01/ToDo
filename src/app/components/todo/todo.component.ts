import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToDo } from 'src/app/models/toDo';
import { TodoService } from 'src/app/services/todo.service';
import { AppState } from 'src/app/store/app.state.interface';
import { sessionSelected } from 'src/app/store/globals/globals.selectors';
import{Guid} from 'guid-typescript';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoName: string = "";
  toDoId: string = "";
  toDoItems:ToDo[] = []
  filteredtoDoItems: string="";
  private _searchCriteria:string="";

  get searchCriteria(): string{
    return this._searchCriteria;
  }

  set searchCriteria(value:string){
    this._searchCriteria = value;
/*     this.filteredtoDoItems = this.filteredtoDoItems(value);
 */
  }


  constructor(private todoservice:TodoService, private store: Store<AppState>) {

  }

  ngOnInit(): void {
    //takes selector from reducer (getting a value from the store)
    //observable, if that value changes, you get the newest change
    this.store.select(sessionSelected).subscribe((session)=>{
      this.toDoItems = session.toDos
    })

    /* this.toDoItems = this.todoservice.getToDo();
    this.filteredtoDoItems =this.toDoItems; */
  }

  addToDo(){
    this.todoservice.addToDo({name: this.todoName, toDoId: Guid.create().toString()} as ToDo)
  }
  deleteToDo(toDoItem:ToDo){
    this.todoservice.deleteToDo(toDoItem.toDoId)
  }

 /*  filteredtoDoItems(searchString:string){
    return this.toDoItems.filter(toDoItem=> toDoItem.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  } */

 /*  searchItems(filteredtoDoItems:ToDo){
    this.todoservice.searchToDo(filteredtoDoItems.toDoId)
  } */


}
