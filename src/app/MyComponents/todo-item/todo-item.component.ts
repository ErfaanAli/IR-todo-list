import { Component ,Input, Output ,EventEmitter} from '@angular/core';
import {Todo} from "../../Todo";
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

@Input() todo !: Todo;
@Input() i! : number;
@Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
@Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();

OnClick(todo: Todo){
  console.log("Delete Button CLicked");
 this.todoDelete.emit(todo);
}
onCheckBoxClick(todo:Todo){
  console.log(todo);
this.todoCheckBox.emit(todo);
}
}
