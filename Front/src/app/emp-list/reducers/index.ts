export * from './emplist.reducer'
import { ActionReducerMap} from '@ngrx/store';
import * as fromEmployee from '../reducers/emplist.reducer';
import * as fromSearch from '../reducers/searchemp.reducer';
  
export interface State {
  [fromEmployee.employeeFeatureKey]: fromEmployee.State;
  [fromSearch.searchFeatureKey]: fromSearch.State;
}
  
export const reducers: ActionReducerMap<State> = {
  [fromEmployee.employeeFeatureKey]: fromEmployee.EmployeeReducer,
  [fromSearch.searchFeatureKey]: fromSearch.SearchReducer
};
