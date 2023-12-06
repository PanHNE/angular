import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TasksListComponent } from './tasks-list.component';
import { Task } from './Task';
import { SubmitTextComponent } from "./submit-text.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <h1 class="text-orange-500 bg-black py-4 text-xl text-center mb-4">
      To do list
    </h1>

    <app-submit-text (submitText)="addTesk($event)" />

    <app-tasks-list [tasks]="tasks"/>
  `,
    imports: [NgFor, TasksListComponent, SubmitTextComponent]
})

export class AppComponent {
  tasks = [
    {
      name: "Angular introduction",
      done: false,
    },
    {
      name: "Learn components",
      done: true
    }
  ];
  
  addTesk(taskName: string) {
    this.tasks.push({
      name: taskName,
      done: false
    })
  }
}
