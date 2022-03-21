import {createReducer, on} from '@ngrx/store';
import * as TodoListActions from './todo-list.actions';
import {CreatedAction} from './todo-list.actions';

export const todoListFeatureKey = 'todoList';

export interface TodoListItem {
  id: number;
  text: string;
  done: boolean;
}


export interface TodoListState {
  todoItems: TodoListItem[];
}

export const initialState: TodoListState = {
  todoItems: [],
};

/**
 * 建議 state 需要保持 immutable
 */
export const todoListReducer = createReducer(
  initialState,

  on(TodoListActions.loadTodoLists, state => state),
  on(TodoListActions.initTodoList, state => ({
    ...initialState,
  })),
  on(TodoListActions.addTodoList, (state: TodoListState, action: CreatedAction): TodoListState => ({
    ...state,
    todoItems: [
      ...state.todoItems,
      {id: new Date().getTime(), text: action.payload.text, done: false}
    ]
  })),
);
