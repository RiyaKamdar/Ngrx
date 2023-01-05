import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { debounceTime, Observable, take } from 'rxjs';
import * as EmployeeActions from '../actions/emplist.action';
import { LoadEmployees } from '../actions/emplist.action';
import { searchEmployee } from '../actions/searchemp.action';
import { Employee } from '../models/employee.model';
import * as fromEmployee from '../selectors/emplist.selector'

@Component({
  selector: 'app-employeecontainer',
  template: `<app-header (search)="search($event)"></app-header>
  <app-employee [dataSource]="employees">
  </app-employee>`,
})
export class EmployeeContainerComponent implements OnInit {
// employees: Employee[] = [];
// errorMessage = '';
  employees: any;


  constructor(private store: Store, private change: ChangeDetectorRef) { }
  
  ngOnInit(): void {
    this.store.dispatch(LoadEmployees());

    this.store.pipe(select(fromEmployee.getEmployees)).subscribe( employees => {
      this.employees = employees;
      this.change.detectChanges();
    })
  }

  search(value: string){
    this.store.dispatch(searchEmployee({query: value}))

    this.store.select(fromEmployee.getSearchedEmployees).pipe(debounceTime(500)).subscribe( employees => {
      this.employees = employees;
      this.change.detectChanges();
      console.log(this.employees)
    })
  }

}
