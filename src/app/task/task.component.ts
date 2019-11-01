import {Tasks} from '../mock-data';
import { Component, OnInit } from '@angular/core';
import {TaskService} from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit {
  public name: string;
  public tasks;
  public newTask;

  constructor(private taskService: TaskService) {
    this.name = 'Tasks';
  }
  getTasks() {
    return this.taskService.getTasks().then(tasks => {
      this.tasks = tasks;
      }
    );
  }

  addTask() {
    this.taskService.add({ name: this.newTask }).then(() => {
      return this.getTasks();
    }).then(() => {
      this.newTask = '';
    });
  }
  updateTask(task, newValue) {
    task.name = newValue;
    return this.taskService.put(task).then(() => {
      return this.tasks;
    });
  }
  destroyTask(task) {
    this.taskService.delete(task).then(() => {
      return this.tasks;
    });
  }

  ngOnInit() {
    this.getTasks();
  }
}
