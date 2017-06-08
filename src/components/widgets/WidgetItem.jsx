import React from 'react';
import styled from 'styled-components';
import { DragSource, DropTarget } from 'react-dnd';

import iconMove from '../../assets/icons/icon-move.svg';
import dataTable from '../../assets/data-table.png';
import iconSettings from '../../assets/icons/icon-settings-copy.svg';
import ItemTypes from './item_types';

const WidgetItemWrapper = styled.li`
  margin-right: 30px;
  margin-bottom: 30px;
  list-style: none;

  height: 370px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.45);
  border: solid 1px #cccccc;

  header {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid #dddddd;
  }
  .widget-title {
    h2 {
      font-family: HelveticaNeue;
      font-size: 20px;
      letter-spacing: -0.1px;
      text-align: left;
      color: #333333;
      margin-bottom: 7px;
      height: 24px;
    }
    p {
      font-family: HelveticaNeue;
      font-size: 12px;
      letter-spacing: -0.1px;
      text-align: left;
      color: #888888;
      height: 15px;
    }
    padding: 15px 0 12px 15px;
  }
  .widget-icons {
    margin: 10px;
  }
  .settings-icon {
    margin-right: 15px;
    cursor: pointer;
  }
  .move-icon {
    cursor: move;
  }

  .widget-content {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    img {
      background-size: auto 100%;
    }
  }
`

const widths = {
  1: '370px',
  2: '770px',
  3: '1170px'
}

const widgetSource = {
  beginDrag(props) {
    return {
      widget: props.widget,
      originalIndex: props.findWidgetIndex(props.id),
    };
  },

  endDrag(props, monitor) {
    const { widget: droppedWidget, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();

    if (!didDrop) {
      props.moveWidget(droppedWidget, originalIndex);
    }
  },
};

const widgetTarget = {
  canDrop() {
    return false;
  },

  hover(props, monitor) {
    const { widget: overWidget } = monitor.getItem();
    const { widget } = props;

    if (widget.id !== overWidget.id) {
      const overIndex = props.findWidgetIndex(overWidget);
      props.moveWidget(widget, overIndex);
    }
  },
};

const WidgetItem = ({widget, connectDropTarget, connectDragSource,
                     findCard, moveCard, isDragging, connectDragPreview}) => {
  const opacity = isDragging ? 0 : 1;
  const style = {width: widths[widget.width], opacity }

  return connectDragPreview(connectDropTarget(
    <div>
      <WidgetItemWrapper style={style}>
        <header>
          <section className='widget-title'>
            <h2>{widget.title}</h2>
            <p>{widget.description}</p>
          </section>
          <section className='widget-icons'>
            <img className='settings-icon' src={iconSettings} alt='settings'/>
            {connectDragSource(
              <img className='move-icon' src={iconMove} alt='move'/>
            )}
          </section>
        </header>
        <section className='widget-content'>
          <img src={dataTable} alt='data'/>
        </section>
      </WidgetItemWrapper>
    </div>
  ))
}

const dropTargetFn = DropTarget(ItemTypes.WIDGET, widgetTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))

const dragSourceFn = DragSource(ItemTypes.WIDGET, widgetSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))

export default dropTargetFn(dragSourceFn(WidgetItem));
