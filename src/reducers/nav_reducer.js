import {
  RECEIVE_CURRENT_TAB
} from '../actions/nav_actions';

const initialState = {
  currentTab: 3
}

const navReducer = (state = initialState, action) => {

  switch(action.type) {
    case RECEIVE_CURRENT_TAB:
      return Object.assign({}, state, {currentTab: action.currentTab})
    default:
      return state;
  }
}

export default navReducer;
