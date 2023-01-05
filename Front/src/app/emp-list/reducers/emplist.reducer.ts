import { createReducer, on } from '@ngrx/store';
import { Employee } from '../models/employee.model';
import { LoadEmployeesSuccess } from '../actions/emplist.action';


export const employeeFeatureKey = 'employeesState';

export interface State {
  employees: Employee[]
}

export const initialState: State = {
  employees: []
};

// export function reducer(state = initialState, action: EmployeeActions): State {
//   switch (action.type) {

//     case EmployeeActionTypes.LoadEmployees:
//       return {
//         ...state
//       }

//     case EmployeeActionTypes.LoadEmployeesSuccess:
//       return {
//         ...state,
//         employees: action.payload.data,
//         error: ''
//       }

//     case EmployeeActionTypes.LoadEmployeesFailure:
//       return {
//         ...state,
//         employees: [],
//         error: action.payload.error
//       }

//     default:
//       return state;
//   }
// }


export const EmployeeReducer = createReducer(
  initialState,
  on(LoadEmployeesSuccess, (state, {data}) => {
    return {
      ...state, data
    }
  })
);