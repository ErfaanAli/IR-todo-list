import { Component } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem!:string;
  todos!: Todo[];
  constructor(){
    this.todos=[
      // {
      //   sno:1,
      //   descreption:"description for first todo",
      //   title:"first to do Title",
      //   isActive:true
      // },
      // {
      //   sno:2,
      //   descreption:"description for Second todo",
      //   title:"Second to do Title",
      //   isActive:true
      // },
      // {
      //   sno:2,
      //   descreption:"description for Third todo",
      //   title:"Third to do Title",
      //   isActive:true
      // },
    ]
    this.localItem = localStorage.getItem("todos")??"";
    if(this.localItem == ""){
      this.todos = []
    }
    else
    {
      this.todos = JSON.parse(this.localItem);
    }

  }
  DeleteTodo(todo:Todo){

     var index = this.todos.indexOf(todo);
     this.todos.splice(index,1);
     localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  AddTodo(todo:Todo){

    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos))
 }
 CheckBoxTodo(todo :Todo){
  console.log(todo);
  var index = this.todos.indexOf(todo);
  this.todos[index].isActive = !this.todos[index].isActive;
  localStorage.setItem("todos",JSON.stringify(this.todos))
 }
}
