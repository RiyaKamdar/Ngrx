import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect } from "@ngrx/effects";
import * as employeeActions from '../actions/emplist.action';
import { EmployeeService } from "src/app/services/employee.service";
import { switchMap, map, catchError } from "rxjs";
import { ofType } from "@ngrx/effects";

@Injectable() 
export class EmployeeEffects {

    constructor(private actions$: Actions, private employee: EmployeeService){}

    // @Effect()
    // loadEmployee$: Observable<Action> = this.actions$.pipe(
    //     ofType(employeeActions.EmployeeActionTypes.LoadEmployees),
    //     mergeMap(
    //         action => this.employee.employeeList().pipe(
    //             map(employees => (new employeeActions.LoadEmployeesSuccess({data: employees }))),
    //             catchError(err => of(new employeeActions.LoadEmployeesFailure({error: err})))
    //         )
    //     )
    // )

    loadEmployee$ = createEffect(() => this.actions$.pipe(
            ofType(employeeActions.LoadEmployees),
            switchMap((action) => {
                return this.employee.employeeList().pipe(
            map((employees: any) => {
                console.log(employees)
                return employeeActions.LoadEmployeesSuccess({data: employees })
            }),
            catchError(async () => employeeActions.LoadEmployeesFailure()))
        })
    ))
}