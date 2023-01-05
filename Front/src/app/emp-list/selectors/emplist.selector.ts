import { createFeatureSelector, createSelector } from "@ngrx/store";
import { employeeFeatureKey, State } from "../reducers/emplist.reducer";
import { searchFeatureKey } from "../reducers/searchemp.reducer";

// const getEmployeeFeatureState = createFeatureSelector<State>('employeeState');
const getEmployeeFeatureState = createSelector((state: any) => state, state => state[employeeFeatureKey]);
const searchEmployeeFeatureState = createSelector((state: any) => state, state => state[searchFeatureKey]);

export const getEmployees = createSelector(
    getEmployeeFeatureState,
    state => {
        return state.data
    }
)

export const searchEmployees = createSelector(
    searchEmployeeFeatureState,
    state => {
        return state.query
    }
)

export const getSearchedEmployees = createSelector(
    getEmployeeFeatureState,
    searchEmployeeFeatureState,
    (data, search) => {
        console.log(data,search)
        return data.data.filter(record => String(record.id).toLowerCase().includes(search.query) || String(record.employee_name).toLowerCase().includes(search.query) || String(record.employee_salary).toLowerCase().includes(search.query) || String(record.employee_age).toLowerCase().includes(search.query) || String(record.contact).toLowerCase().includes(search.query))
    }
)