import React from 'react';
import styled from 'styled-components';

import WidgetTypeDetail from './WidgetTypeDetail';

const WidgetTypeMenuWrapper = styled.section`
  .widget-type-list {
    display: flex;
    margin-top: 21px;
    justify-content: space-between;
  }

  .widget-type-list > div:last-child {
    border-right: 1px solid #dddddd;
  }

  h3 {
    font-family: HelveticaNeue;
    font-size: 16px;
    letter-spacing: -0.1px;
    text-align: left;
    color: #333333;
  }

  padding-bottom: 32px;
  border-bottom: 1px solid #dddddd;


`

const WidgetTypeMenu = ({inProgress, update}) => {
  const types = ['Table', 'Donut Chart', 'Bar Chart', 'Line Graph']
  return (
    <WidgetTypeMenuWrapper>
      <h3>Choose a Widget Type</h3>
      <ul className='widget-type-list'>
        {types.map((type, idx) => (
          <WidgetTypeDetail
            key={idx} name={type}
            update={update}
            inProgress={inProgress} />
        ))}
      </ul>
    </WidgetTypeMenuWrapper>
  )
}

export default WidgetTypeMenu;
