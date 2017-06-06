import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

import iconEdit from '../../assets/icons/icon-edit.svg';
import DashboardButtons from './DashboardButtons';
import { selectCurrentDashboard } from '../../reducers/selectors';
import { updateDashboard } from '../../actions/dashboard_actions';

const DashboardControlWrapper = styled.section`
  width: 100%;
  height: 92px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 16px;
  border-bottom: 4px solid #333333;

  input.dashboard-title {
    width: 172px;
    height: 29px;
    font-family: HelveticaNeue;
    font-size: 24px;
    letter-spacing: -0.1px;
    text-align: left;
    color: #333333;
    background: none;
    border: none;
  }

  img.edit-icon {
    cursor: pointer;
  }
`

const DashboardTitle = ({dashboard, updateDashboard}) => {
  let inputEl;
  const handleClick = (e) => {
    e.preventDefault();
    const newDashboard = Object.assign({}, dashboard, {name: e.currentTarget.value})
    if (!!dashboard) { updateDashboard(newDashboard) }
  }
  return (
    <div>
      <input
        ref={(input) => { inputEl = input }}
        className='dashboard-title'
        value={!!dashboard ? dashboard.name : "New Dashboard"}
        onChange={handleClick}
        />
      <img
        className='edit-icon'
        src={iconEdit} alt='edit'
        onClick={() => inputEl.focus()}/>
    </div>
  )
}

const DashboardControl = ({currentDashboard, updateDashboard}) => {
  return (
    <DashboardControlWrapper>
      <DashboardTitle
        dashboard={currentDashboard}
        updateDashboard={updateDashboard}
      />
      <DashboardButtons currentDashboard={currentDashboard} />
    </DashboardControlWrapper>
  )
}

const mapStateToProps = (state) => ({
  currentDashboard: selectCurrentDashboard(state)
})

const mapDispatchToProps = (dispatch) => ({
  updateDashboard: (id) => dispatch(updateDashboard(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardControl);
