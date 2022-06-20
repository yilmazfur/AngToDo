import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {

    this.todos = [
      {
        completed: false,
        content: 'first todo'
      },
      {
        completed: true,
        content: 'Sec todo'
      }
    ]
  }
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  removeItem(id: number) {
    this.todos = this.todos.filter((obj, i) => i != id)
  }

  addItem() {//bu parametresiz geldi
    this.todos.push({
      completed: false,
      content: this.inputTodo //2 way bindingden dolayi parametre almiyor olabilir
    });

    this.inputTodo = ""; //bunu yapmazsan inpu silinmez
  }

}
