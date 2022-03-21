import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectTodoItemsProperty} from "../../store/todo-list/todo-list.selectors";
import {addTodoList, initTodoList} from "../../store/todo-list/todo-list.actions";
import {TodoListItem} from "../../store/todo-list/todo-list.reducer";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  text = '';
  data: TodoListItem[] = [];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(initTodoList());

    this.store.select(selectTodoItemsProperty)
      .subscribe((data) => this.data = data);
  }

  add() {
    this.store.dispatch(addTodoList({
      payload: {text: this.text},
    }));
  }

}
