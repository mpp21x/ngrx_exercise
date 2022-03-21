import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {todoListReducer} from "./store/todo-list/todo-list.reducer";
import {RouterModule} from "@angular/router";
import { EffectsModule } from '@ngrx/effects';
import {TodoListEffects} from "./store/todo-list/todo-list.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot({
      /** 配合 lazy loading 時，應該要把初始化設定放在 feature module */
      // todoList: todoListReducer,
    }, {}),
    EffectsModule.forRoot([
      TodoListEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
