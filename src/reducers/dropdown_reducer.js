import {
  OPEN_DROPDOWN,
  CLOSE_DROPDOWN
} from '../actions/dropdown_actions';

const initialState = {
   show: false
}

const dropdownReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case CLOSE_DROPDOWN:
      return Object.assign({}, state, {show: false})
    case OPEN_DROPDOWN:
      return Object.assign({}, state, {show: true});
    default:
      return state;
  }
}

export default dropdownReducer;
