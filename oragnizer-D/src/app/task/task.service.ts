import { Injectable } from '@angular/core';
import {Task} from '../task';

const  Tasks: Task[] = [
  {id: 1, name: 'Fix the internet', dueDate: '23 April, 2029', complete: false },
  {id: 2, name: 'PLan the team sprint', dueDate: '23 April, 2029', complete: false },
  {id: 3, name: 'Organize the trip', dueDate: '23 April, 2029', complete: false },
  {id: 4, name: 'Email the customers about the changes', dueDate: '23 April, 2029', complete: true },
];

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() {
    return new Promise(resolve => resolve(Tasks));
  }
  add(data) {
    return new Promise(resolve => {
      Tasks.push(data);
      resolve(data);
    });
  }
  put(changed) {
    return new Promise ( resolve => {
      const index = Tasks.findIndex(task => task === changed);
      Tasks[index].name = changed.title;
      resolve(changed);
    });
  }
  delete(selected) {
    return new Promise(resolve => {
      const index = Tasks.findIndex(task => task === selected);
      Tasks.splice(index, 1);
      resolve(true);
    });
  }
}
