import { Task } from './task';
import { Department } from './department';
import { Employee } from './employee';

export const  Tasks: Task[] = [
  {id: 1, name: 'Fix the internet', dueDate: '23 April, 2029', complete: false },
  {id: 2, name: 'PLan the team sprint', dueDate: '23 April, 2029', complete: false },
  {id: 3, name: 'Organize the trip', dueDate: '23 April, 2029', complete: false },
  {id: 4, name: 'Email the customers about the changes', dueDate: '23 April, 2029', complete: true },
];


// export const  Departments: Department[] = [
//   {id: 1, name: 'Fix the internet' },
//   {id: 2, name: 'Embedded Software' },
//   {id: 3, name: 'Administration' },
//   {id: 4, name: 'Marketing' },
// ];


// export const  Employees: Employee[] = [
//   {id: 1, firstName: 'Jerry',  lastName: 'Jacobs', gender: 'male', dateOfBirth: '1 Jan 1998', department: 'IT security'},
//   {id: 1, firstName: 'Maarten',  lastName: 'Jacobs', gender: 'male', dateOfBirth: '1 Jan 1998', department: 'IT security'},
//   {id: 1, firstName: 'Joshua',  lastName: 'Jacobs', gender: 'male', dateOfBirth: '1 Jan 1998', department: 'IT security'},
//   {id: 1, firstName: 'Coen',  lastName: 'Jacobs', gender: 'male', dateOfBirth: '1 Jan 1998', department: 'IT security'},
// ];
