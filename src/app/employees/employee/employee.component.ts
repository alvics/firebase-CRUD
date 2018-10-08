import { EmployeeService } from './../../shared/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  constructor(public service: EmployeeService) {}

  departments = [
    { id: 101, value: 'Dep 1' },
    { id: 102, value: 'Dep 2' },
    { id: 103, value: 'Dep 3' }
  ];

  ngOnInit() {
    this.service.getEmployees();
  }

  onClear() {
    this.service.form.reset();
    this.service.form.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.form.initializeFormGroup();
    }
  }
}
