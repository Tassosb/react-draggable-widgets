import {
  RECEIVE_NEW_WIDGET,
  RECEIVE_WIDGET_ORDER
} from '../actions/widgets_actions';

const initialState = {
  byId: {
          1: {
            id: 1,
            type: 'Table',
            width: 1,
            title: 'Average Yearly Incomes',
            description: 'Some data about money'
          },
          2: {
            id: 2,
            type: 'Table',
            width: 1,
            title: 'Other Table About Money',
            description: 'Most common salaries in some places'
          }
        },
  allIds: [1, 2]
}

const widgetsReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NEW_WIDGET:
      const lastId = Math.max(...state.allIds) || 0;
      const newId = lastId + 1;
      const newAllIds = [...state.allIds, newId];
      const widgetWithId = Object.assign({}, action.widget, {id: newId});
      const newByIds = Object.assign({}, state.byId, {[newId]: widgetWithId});
      return Object.assign({}, state, {byId: newByIds, allIds: newAllIds})
    case RECEIVE_WIDGET_ORDER:
      return Object.assign({}, state, {allIds: action.widgetIds});
    default:
      return state;
  }
}

export default widgetsReducer;
