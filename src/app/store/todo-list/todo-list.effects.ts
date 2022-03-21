import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as TodoListActions from './todo-list.actions';


@Injectable()
export class TodoListEffects {

/*  loadTodoLists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoListActions.loadTodoLists),
      concatMap(() =>
        /!** An EMPTY observable only emits completion. Replace with your own observable API request *!/
        EMPTY.pipe(
          map(data => TodoListActions.loadTodoListsSuccess({data})),
          catchError(error => of(TodoListActions.loadTodoListsFailure({error}))))
      )
    );
  });*/


  constructor(private actions$: Actions) {
  }

}
