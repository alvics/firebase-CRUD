import { EmployeeService } from './../../shared/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  constructor(private service: EmployeeService) {}

  departments = [
    { id: 101, value: 'Dep 1' },
    { id: 102, value: 'Dep 2' },
    { id: 103, value: 'Dep 3' }
  ];

  ngOnInit() {}
}
