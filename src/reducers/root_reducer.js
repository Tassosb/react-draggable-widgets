import { combineReducers } from 'redux';
import nav from './nav_reducer';
import dashboards from './dashboard_reducer';
import dropdown from './dropdown_reducer';
import inProgress from './in_progress_reducer';
import widgets from './widgets_reducer';

const RootReducer = combineReducers({
  nav,
  dashboards,
  dropdown,
  inProgress,
  widgets
});

export default RootReducer;
