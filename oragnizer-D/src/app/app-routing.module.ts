import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';
import {TaskComponent} from './task/task.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'task', component: TaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
