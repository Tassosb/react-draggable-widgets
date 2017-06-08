export const selectCurrentDashboard = ({dashboards}) => {
  return dashboards.byId[dashboards.current];
}

export const selectAllDashboards = ({dashboards}) => {
  return dashboards.allIds.map((id) => dashboards.byId[id]);
}

export const selectAllWidgets = ({widgets}) => {
  return widgets.allIds.map((id) => widgets.byId[id]);
}
