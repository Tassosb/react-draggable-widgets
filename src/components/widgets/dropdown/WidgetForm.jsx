import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import WidgetTypeMenu from './WidgetTypeMenu';
import {receiveInProgressWidget, clearInProgressWidget} from '../../../actions/in_progress_actions';
import {receiveNewWidget} from '../../../actions/widgets_actions';
import WidgetDetailForm from './WidgetDetailForm';

const WidgetFormWrapper = styled.form`
  padding: 30px 60px 30px 60px;

  .submit-section {
    border-top: 1px solid #dddddd;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 31px;
  }

  .add-widget-button {
    width: 120px;
    height: 30px;
    border-radius: 3px;
    background-color: #ffffff;
    border: solid 1px #bbbbbb;
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #333333;
    margin-right: 30px;
    cursor: pointer;
  }

  .cancel {
    font-family: HelveticaNeue;
    font-size: 14px;
    text-align: left;
    color: #777777;
    text-decoration: underline;
    cursor: pointer;
  }
`

const WidgetForm = ({inProgress, update, closeDropdown, addWidget, clear}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addWidget(inProgress);
    clear();
    closeDropdown();
  }
  return (
    <WidgetFormWrapper onSubmit={handleSubmit}>
      <WidgetTypeMenu inProgress={inProgress} update={update} />
      <WidgetDetailForm inProgress={inProgress} update={update} />
      <section className='submit-section'>
        <button
          className='add-widget-button'>Add Widget</button>
        <p onClick={closeDropdown} className='cancel'>Cancel</p>
      </section>
    </WidgetFormWrapper>
  )
}
const mapStateToProps = ({inProgress}) => ({
  inProgress: inProgress.widget
})

const mapDispatchToProps = (dispatch) => ({
  update: (widget) => dispatch(receiveInProgressWidget(widget)),
  addWidget: (widget) => dispatch(receiveNewWidget(widget)),
  clear: () => dispatch(clearInProgressWidget())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetForm);
