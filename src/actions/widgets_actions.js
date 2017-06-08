export const RECEIVE_NEW_WIDGET = 'RECEIVE_NEW_WIDGET';
export const RECEIVE_WIDGET_ORDER = 'RECEIVE_WIDGET_ORDER';

export const receiveWidgetOrder = (widgetIds) => ({
  type: RECEIVE_WIDGET_ORDER,
  widgetIds
});

export const receiveNewWidget = (widget) => ({
  type: RECEIVE_NEW_WIDGET,
  widget
});
