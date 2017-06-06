import { combineReducers } from 'redux';
import nav from './nav_reducer';
import dashboards from './dashboard_reducer';
import dropdown from './dropdown_reducer';

const RootReducer = combineReducers({
  nav,
  dashboards,
  dropdown
});

export default RootReducer;
