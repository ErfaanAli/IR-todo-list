import { Component,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
title!:string;
descreption!:string;
@Output() todoAdd: EventEmitter<Todo> = new EventEmitter();


onSubmit(){
  const todo = 
  {
    sno:3,
    title : this.title,
    descreption:this.descreption,
    isActive:true
  }
  this.todoAdd.emit(todo);
}
}
