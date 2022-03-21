import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromTodoList from './todo-list.reducer';
import {TodoListState} from './todo-list.reducer';

export const selectTodoListState = createFeatureSelector<fromTodoList.TodoListState>(
  fromTodoList.todoListFeatureKey
);

/**
 * createSelector 主要用於 store 的 select method，透過 createSelector 回傳的物件，可以取得此變數所定義的 state function 回傳的資料
 */
export const selectTodoItemsProperty = createSelector(
  selectTodoListState,
  (state: TodoListState) => {
    console.log(state);
    return state.todoItems;
  },
);

export const undoneTodoItems = createSelector(
  selectTodoListState,
  (state: TodoListState) => state.todoItems.filter(item => item.done),
);
