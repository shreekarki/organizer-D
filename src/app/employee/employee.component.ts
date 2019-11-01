// import {Employees} from '../mock-data';
import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service';
import {Department} from '../department';
import {Employee} from '../employee';

@Component({
  selector: 'app-employee',

  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  public name: string;
  public employees;
  private newEmployee;

  constructor(private employeeService: EmployeeService) {
    this.name = 'Employees';
  }
  getEmployees() {
    return this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }
  // addDepartment(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.departmentService.add({ name } as Department)
  //     .subscribe(department => {
  //       this.departments.push(department);
  //     });
  // }
  addEmployee(first_name: string): void {
    this.employeeService.add({ first_name } as Employee).subscribe(employee => {
      this.employees.push(employee);
    });
  }
  // updateEmployee(employee, newValue) {
  //   employee.firstName = newValue;
  //   return this.employeeService.put(employee).then(() => {
  //     return this.employees;
  //   });
  // }
  destroyEmployee(employee) {
    this.employeeService.delete(employee).subscribe(employees => {
      this.getEmployees();
    });
  }

  ngOnInit() {
    this.getEmployees();
  }
}
