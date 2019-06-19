/* ===================================================================================
------------------------------ DYNAMIC DROP DOWN -------------------------------------
--------------------------------------------------------------------------------------
----- Retrieve from firebase database to display Departments in dropdown form --------
--------------------------------------------------------------------------------------
=====================================================================================*/

import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  // Define properties
  departmentList: AngularFireList<any>;
  array = [];

  constructor(private firebase: AngularFireDatabase) {
    this.departmentList = this.firebase.list('departments'); // retrieve from the node 'departments'
    // convert to observable and subscribe
    this.departmentList.snapshotChanges().subscribe(list => {
      // generate the list with map to return the array
      this.array = list.map(items => {
        return {
          $key: items.key, // key = node abc1, abc2, abc3, adb4
          ...items.payload.val() // display by ... (destructuring) method
        };
      });
    });
  }
}
