import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { closeDropdown } from '../../../actions/dropdown_actions';
import iconClose from '../../../assets/icons/icon-close.svg';
import WidgetForm from './WidgetForm';

const AddWidgetDropdownWrapper = styled.section`
  position: absolute;
  z-index: 999;
  top: 0;
  width: 1300px;
  height: 750px;
  background-color: #ffffff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  overflow: hidden;

  .dropdown-header {
    width: 100%;
    height: 60px;
    background-color: #333333;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon-close {
      width: 30px;
      height: 30px;
      object-fit: contain;
      cursor: pointer;
      margin-right: 65px;
    }

    h2 {
      margin-left: 64px;
      width: 127px;
      height: 25px;
      font-family: HelveticaNeue;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: -0.1px;
      text-align: left;
      color: #ffffff;
    }
  }
`

const DropdownHeader = ({ closeDropdown }) => {
  return (
    <header className='dropdown-header'>
      <h2>Add a Widget</h2>
      <img className='icon-close'
        src={iconClose} alt='close'
        onClick={closeDropdown}/>
    </header>
  )
}

const AddWidgetDropdown = ({show, closeDropdown}) => {
  const height = show ? 750 : 0;
  const style = {height: height+'px'}
  return (
    <AddWidgetDropdownWrapper style={style}>
      <DropdownHeader closeDropdown={closeDropdown} />
      <WidgetForm closeDropdown={closeDropdown} />
    </AddWidgetDropdownWrapper>
  )
}

const mapStateToProps = ({dropdown: {show}}) => ({
  show
})

const mapDispatchToProps = (dispatch) => ({
  closeDropdown: () => dispatch(closeDropdown())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWidgetDropdown);
