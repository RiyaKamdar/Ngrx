import { createAction, props } from '@ngrx/store';
import { Employee } from '../models/employee.model';

export const LoadEmployees = createAction(
  '[Employee] Load Employees'
)

export const LoadEmployeesSuccess = createAction(
  '[Employee] Load Employees Success',
  props<{data: Employee[]}>()
)

export const LoadEmployeesFailure = createAction(
  '[Employee] Load Employees Failure'
)