import React from 'react';
import { connect } from 'react-redux';

import iconAdd from '../../assets/icons/icon-add.svg';
import { openDropdown } from '../../actions/dropdown_actions';

const AddWidgetButton = ({openDropdown}) => {
  return (
    <div className='add-widget-button' onClick={openDropdown}>
      <button className='add-icon'>
        <img src={iconAdd} alt='add'/>
      </button>
      <button className='add-text'>
        Add a New Widget
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  openDropdown: () => dispatch(openDropdown())
})

export default connect(
  null,
  mapDispatchToProps
)(AddWidgetButton);
