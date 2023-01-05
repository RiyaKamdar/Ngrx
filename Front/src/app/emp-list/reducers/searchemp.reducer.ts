import { createReducer, on } from '@ngrx/store';
import { searchEmployee, searchFailure, searchSuccess } from '../actions/searchemp.action';
import { Employee } from '../models/employee.model';

export const searchFeatureKey = 'search';

export interface State {
    employee: Employee[],
    query: string
}

export  const initialState: State = {
    employee: [],
    query: ''
}

export const SearchReducer = createReducer(
    initialState,
    on(searchEmployee, (state, {query}) => {
        return{
            ...state, query
        }
    })
);
