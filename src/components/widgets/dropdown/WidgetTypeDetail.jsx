import React from 'react';
import styled from 'styled-components';

import barChart from '../../../assets/icons/widgettype-barchart.svg';
import donutChart from '../../../assets/icons/widgettype-donutchart.svg';
import lineGraph from '../../../assets/icons/widgettype-linegraph.svg';
import table from '../../../assets/icons/widgettype-table.svg';

const WidgetTypeDetailWrapper = styled.div`
  ul.width-menu {
    display: flex;
    margin-top: 15px;
    border-top: 1px solid #dddddd;
    width: 100%;
    justify-content: space-around;
    height: 40px;

    li {
      flex: 1;
      border-right: 1px solid #dddddd;
      cursor: pointer;
    }
    li:last-child {
      border-right: none;
    }
    li.selected {
      background-color: #00a4c7;
      p {
        color: #ffffff
      }
    }

    p {
      margin-top: 12px;
      text-align: center;
      height: 14.3px;
      font-family: HelveticaNeue;
      font-size: 12px;
      letter-spacing: -0.1px;
      text-align: center;
      color: #00a4c7;
    }
  }

  .type-detail-header {
    height: 40px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    margin-bottom: 13px;
    h3 {
      margin-top: 12px;
      text-align: center;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 268px;
  height: 200px;
  background-color: #f7f7f7;
  border: solid 1px #dddddd;
  border-right: none;
`
const chartIcons = {
  Table: table,
  'Donut Chart': donutChart,
  'Bar Chart': barChart,
  'Line Graph': lineGraph
}

const WidgetTypeDetail = ({name, inProgress, update}) => {
  const handleClick = (w) => (e) => {
    const updated = Object.assign({}, inProgress, {width: w, type: name});
    update(updated);
  }

  const { width } = inProgress;
  const getClass = (w) => (
    width === w && inProgress.type === name ? 'selected' : ''
  );

  return (
    <WidgetTypeDetailWrapper>
      <div className='type-detail-header'>
        <h3>{name}</h3>
      </div>
      <figure><img src={chartIcons[name]} alt='graph' /></figure>
      <ul className='width-menu'>
        <li className={getClass(1)} onClick={handleClick(1)}>
          <p>1/3 Width</p>

          </li>
        <li className={getClass(2)} onClick={handleClick(2)}>
          <p>2/3 Width</p>

          </li>
        <li className={getClass(3)} onClick={handleClick(3)}>
          <p>Full Width</p>

          </li>
      </ul>
    </WidgetTypeDetailWrapper>
  )
}

export default WidgetTypeDetail;
