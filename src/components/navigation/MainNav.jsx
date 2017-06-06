import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { receiveCurrentTab } from '../../actions/nav_actions';

const MainNavWrapper = styled.nav`
  display: flex;
  list-style: none;
  cursor: pointer;

  li {
    font-family: HelveticaNeue;
    font-size: 14px;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 36px;
    border-top: 4px solid #ffffff;
    border-bottom: 4px solid #ffffff;
  }

  li.selected {
    background-color: #f7f7f7;;
    border-bottom: 4px solid #f7f7f7;;
    border-top: 4px solid #333333;
    box-sizing: border-box;
  }
  .nav-sep {
  width: 1px;
  height: 60px;
  background-color: #dddddd;
}
`

const MainNav = ({ currentTab, receiveCurrentTab }) => {
  const isSelected = (id) => currentTab === id ? 'selected' : '';

  return (
    <MainNavWrapper>
      <div className='nav-sep'></div>
      <li className={ isSelected(1) } onClick={() => receiveCurrentTab(1)}>
        Nav One
      </li>
      <div className='nav-sep'></div>
      <li className={ isSelected(2) } onClick={() => receiveCurrentTab(2)}>Nav Two</li>
      <div className='nav-sep'></div>
      <li className={ isSelected(3) } onClick={() => receiveCurrentTab(3)}>Dashboards</li>
      <div className='nav-sep'></div>
    </MainNavWrapper>
  )
}

const mapStateToProps = ({nav: {currentTab}}, ownProps) => ({
  currentTab
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveCurrentTab: (tab) => dispatch(receiveCurrentTab(tab))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNav);
