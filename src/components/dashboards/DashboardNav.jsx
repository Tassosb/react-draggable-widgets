import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

import { selectCurrentDashboard } from '../../reducers/selectors';

const DashboardNavWrapper = styled.nav`
  width: 1300px;
  height: 40px;
  background-color: #333333;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;

  p {
    height: 22px;
    font-family: HelveticaNeue;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.1px;
    text-align: left;
    color: #ffffff;
    margin-left: 64px;
  }
`

const DashboardNav = ({currentDashboard}) => {
  return (
    <DashboardNavWrapper>
      <p>
        Dashboards
        {!!currentDashboard &&  ' / '+currentDashboard.name}
      </p>
    </DashboardNavWrapper>
  )
}

const mapStateToProps = (state) => ({
  currentDashboard: selectCurrentDashboard(state)
})

export default connect(
  mapStateToProps
)(DashboardNav);
