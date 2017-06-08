import {
  RECEIVE_IN_PROGRESS_WIDGET,
  CLEAR_IN_PROGRESS_WIDGET
} from '../actions/in_progress_actions';


const initialState = {
  widget: {
    type: '',
    width: 0,
    title: "",
    description: ""
  }
}

const dropdownReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_IN_PROGRESS_WIDGET:
      return Object.assign({}, state, {widget: action.inProgress})
    case CLEAR_IN_PROGRESS_WIDGET:
      return Object.assign({}, state, {widget: initialState.widget});
    default:
      return state;
  }
}

export default dropdownReducer;
