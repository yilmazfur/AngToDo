import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule } from '@angular/forms';////asdsad

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ////asdsad       [(ngModel)]="inputTodo" icin bun satir gerekti
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
