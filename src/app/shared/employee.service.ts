/* -----------------------------------------------------------------------
---------------  CRUD Service Add to Firebase Database -------------------
------------------------------------------------------------------------ */

import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private firebase: AngularFireDatabase) {}

  employeeList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl('null'),
    fullName: new FormControl('', Validators.required), // required fields with validation
    email: new FormControl('', Validators.email), // verify correct format of email
    mobile: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]), // validation fields with required length
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false) // default
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: 1,
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }

  // Set employeeList / create node employee
  getEmployees() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList.snapshotChanges();
  }

  // Create - pushing list to firebase
  insertEmployee(employee) {
    this.employeeList.push({
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate: employee.hireDate,
      isPermanent: employee.isPermanent
    });
  }

  // Update the list
  updateEmployee(employee) {
    this.employeeList.update(employee.$key, {
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate: employee.hireDate,
      isPermanent: employee.isPermanent
    });
  }

  // Delete list from firebase
  deleteEmployee($key: string) {
    this.employeeList.remove($key);
  }
}
