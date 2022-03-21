import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectTodoItemsProperty} from "../../store/todo-list/todo-list.selectors";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectTodoItemsProperty).subscribe((items)=>{
      console.log(items);
    });
  }

}
