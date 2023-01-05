import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Employee } from '../emp-list/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeUrl = "http://localhost:3000/api/emplist";
  constructor(private http: HttpClient) { }

  employeeList(): Observable<Employee[]> {
    // console.log(this.http.get(this.employeeUrl));
    return this.http.get<Employee[]>(this.employeeUrl).pipe(
      tap(data => console.log((data))),
    );
  }
}
