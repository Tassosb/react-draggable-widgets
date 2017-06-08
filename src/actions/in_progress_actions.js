export const RECEIVE_IN_PROGRESS_WIDGET = 'RECEIVE_IN_PROGRESS_WIDGET';
export const CLEAR_IN_PROGRESS_WIDGET = 'CLEAR_IN_PROGRESS_WIDGET';

export const receiveInProgressWidget = (inProgress) => ({
  type: RECEIVE_IN_PROGRESS_WIDGET,
  inProgress
});

export const clearInProgressWidget = () => ({
  type: CLEAR_IN_PROGRESS_WIDGET
});
