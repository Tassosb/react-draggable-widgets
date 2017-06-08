import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { selectAllDashboards } from '../../reducers/selectors';
import SmallAddWidgetButton from '../shared/SmallAddWidgetButton';
import dropdownArrow from '../../assets/icons/dropdown-arrow.svg';

const DashboardButtonsWrapper = styled.section`
  display: flex;
  align-items: flex-end;
  select {
    width: 200px;
    height: 30px;
    border-radius: 3px;
    background-color: #ffffff;
    border: solid 1px #bbbbbb;
  }

  .dashboard-switcher {
    position:relative;
    margin-right: 22px;
    select {
      margin-top:7px;
      -webkit-appearance: initial;
      padding: 7px;
    }
    h3 {
      width: 116px;
      height: 16px;
      font-family: HelveticaNeue;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: -0.1px;
      text-align: left;
      color: #333333;
    }
    .dropdown-arrow {
      position: absolute;
      right: 12px;
      top: 34px;
    }
  }
`

const DashboardButtons = ({dashboards, currentDashboard}) => {
  return (
    <DashboardButtonsWrapper>
      <div className='dashboard-switcher'>
        <h3>Dashboard Switcher</h3>
        <select>
          <option>-Select a Dashboard-</option>
          {dashboards.map((d) => (
            <option key={d.id}
              selected={(d.id === currentDashboard.id)}>
              {d.name}
            </option>
          ))}
        </select>
        <img src={dropdownArrow}
          className="dropdown-arrow" alt='arrow'/>
      </div>
      <SmallAddWidgetButton />
    </DashboardButtonsWrapper>
  )
}

const mapStateToProps = (state) => ({
  dashboards: selectAllDashboards(state)
})

export default connect(
  mapStateToProps
)(DashboardButtons);
