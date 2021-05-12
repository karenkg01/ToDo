import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToDo } from './models/toDo';
import { TodoService } from './services/todo.service';
import { AppState } from './store/app.state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo-Client';
  constructor(private store: Store<AppState>, private todoservice: TodoService){
    this.todoservice.OnPageLoad()
  }
}

