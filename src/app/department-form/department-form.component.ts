import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {Department} from '../department';
import {DepartmentService} from '../department/department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.sass']
})


export class DepartmentFormComponent implements OnInit {
  @Output() countChanged: EventEmitter<Department[]> = new EventEmitter();
  public departments: Department[];
  public department: Department;
  constructor(  private departmentService: DepartmentService) {
    this.department = new Department( 0, '', '');
  }
  ngOnInit() {
    this.getDepartments();
  }

  getDepartments() {
    return this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
    });
  }
  onSubmit(f: NgForm) {
    this.departmentService.add(f.value)
      .subscribe(department => {
        this.departments.push(department); });
  }
  destroyDepartment(department) {
    this.departmentService.delete(department).subscribe(departments => {
      this.getDepartments();
    });
  }
}
