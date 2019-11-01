import { Component, OnInit } from '@angular/core';
import {DepartmentService} from './department.service';
import {Department} from '../department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.sass'],
  providers: [DepartmentService],
})
export class DepartmentComponent implements OnInit {
  public name: string;
  public departments;

  constructor(private departmentService: DepartmentService) {
  }

  getDepartments() {
    return this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
    });
  }
  addDepartment(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.departmentService.add({ name } as Department)
       .subscribe(department => {
         this.departments.push(department);
       });
  }
  updateDepartment(department, newValue) {
    // department.name = newValue;
    // return this.departmentService.put(department).then(() => {
    //   return this.departments;
    // });
  }
  destroyDepartment(department) {
    this.departmentService.delete(department).subscribe(departments => {
      this.getDepartments();
    });
  }
  ngOnInit() {
    this.getDepartments();
  }
}
