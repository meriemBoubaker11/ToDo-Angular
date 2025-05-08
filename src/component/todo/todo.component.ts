import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';
  constructor() { }
  ngOnInit(): void {
    this.todos = [
      { content: "first to do", completed: false },
      { content: "second to do", completed: true }
    ];
  }
  toggleDone(id: number): void {
    this.todos.map((v, i) => { if (id === i) v.completed = !v.completed })
    return
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((v, i) => { return i != id })
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo = "";
  }
}
