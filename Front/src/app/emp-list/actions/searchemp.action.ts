import { createAction, props } from '@ngrx/store';
import { Employee } from '../models/employee.model';

export const searchEmployee = createAction(
    '[Find Employee] Search Employee',
    props<{query: string}>()
);

export const searchSuccess = createAction(
    '[Employee/API] Search Success',
    props<{ data: Employee[]}>()
);

export const searchFailure = createAction(
    '[Employee/API] Search Failure',
    props<{ error: string}>()
)