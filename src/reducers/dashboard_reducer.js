import {
  RECEIVE_CURRENT_DASHBOARD,
  UPDATE_DASHBOARD
} from '../actions/dashboard_actions';

const initialState = {
   byId: {1: {id: 1, name: "Income Groups"}},
   allIds: [1],
   current: 1
}

const dashboardReducer = (state = initialState, action) => {
  Object.freeze(state);

  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_DASHBOARD:
      return Object.assign({}, state, {current: action.current})
    case UPDATE_DASHBOARD:
      newState.byId[action.dashboard.id] = action.dashboard;
      return Object.assign(newState);
    default:
      return state;
  }
}

export default dashboardReducer;
