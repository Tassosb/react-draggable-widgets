export const RECEIVE_CURRENT_DASHBOARD = 'RECEIVE_CURRENT_DASHBOARD';
export const UPDATE_DASHBOARD = 'UPDATE_DASHBOARD';

export const receiveCurrentDashboard = (current) => ({
  type: RECEIVE_CURRENT_DASHBOARD,
  current
});

export const updateDashboard = (dashboard) => ({
  type: UPDATE_DASHBOARD,
  dashboard
})
