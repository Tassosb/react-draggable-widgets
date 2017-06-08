import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import {selectAllWidgets} from '../../reducers/selectors';
import WidgetItem from './WidgetItem';
import {receiveWidgetOrder} from '../../actions/widgets_actions';
import ItemTypes from './item_types';

const WidgetIndexWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 1330px;
`

const WidgetIndex = ({widgets, receiveWidgetOrder, connectDropTarget}) => {
  const findWidgetIndex = (widget) => {
    return widgets.indexOf(widget);
  }

  const moveWidget = (widget, atIndex) => {
    const idx = findWidgetIndex(widget);
    if (idx < 0 || atIndex < 0) return;
    const widgetIds = widgets.map((w) => w.id);
    [widgetIds[idx], widgetIds[atIndex]] = [widgetIds[atIndex], widgetIds[idx]]
    receiveWidgetOrder(widgetIds);
  }

  return connectDropTarget(
    <div>
      <WidgetIndexWrapper>
        {widgets.map((widget) => (
          <WidgetItem key={widget.id}
            widget={widget}
            moveWidget={moveWidget}
            findWidgetIndex={findWidgetIndex}
            />
        ))}
      </WidgetIndexWrapper>
    </div>
  )
}

const mapStateToProps = (state) => ({
  widgets: selectAllWidgets(state)
})

const mapDispatchToProps = (dispatch) => ({
  receiveWidgetOrder: (widgetIds) => dispatch(receiveWidgetOrder(widgetIds))
})

const widgetTarget = {
  drop() {
  },
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DragDropContext(HTML5Backend)(
DropTarget(ItemTypes.WIDGET, widgetTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(WidgetIndex)));
