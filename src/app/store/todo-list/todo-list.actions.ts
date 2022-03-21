import {createAction, props} from '@ngrx/store';
import {TodoListItem} from "./todo-list.reducer";

export const loadTodoLists = createAction(
  '[TodoList] Load TodoLists'
);

export const initTodoList = createAction(
  '[TodoList] Init TodoList',
);

export interface TodoItemCreate {
  text: string;
}

export type CreatedAction = { payload: TodoItemCreate };

export const addTodoList = createAction(
  '[TodoList] Add TodoList',
  props<CreatedAction>(),
);

export const queryTodoItems = createAction(
  '[TodoList] Query TodoList',
);

export const replaceTodoItems = createAction(
  '[TodoList] Replace TodoList',
  props<{ items: TodoListItem[]}>(),
);
