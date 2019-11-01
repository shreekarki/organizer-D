import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {EmployeeService} from '../employee/employee.service';
import {Employee} from '../employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.sass']
})
export class EmployeeFormComponent implements OnInit {

  public employee: Employee;
  public employees;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee(1, '','','', 8258);
    this.getEmployees();
  }

  getEmployees() {
    return this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }
  onSubmit(f: NgForm) {
    this.employeeService.add(f.value)
      .subscribe( employee => {
        this.employees.push(employee); });
  }
  destroyEmployee(employee) {
    this.employeeService.delete(employee).subscribe(employees => {
      this.getEmployees();
    });
  }

}
