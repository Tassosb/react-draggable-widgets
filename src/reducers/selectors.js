export const selectCurrentDashboard = ({dashboards}) => {
  return dashboards.byId[dashboards.current];
}

export const selectAllDashboards = ({dashboards}) => {
  return dashboards.allIds.map((id) => dashboards.byId[id]);
}
