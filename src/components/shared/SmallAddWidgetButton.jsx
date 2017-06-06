import React from 'react';
import styled from 'styled-components';
import AddWidgetButton from './AddWidgetButton';

const SmallAddWidgetButtonWrapper = styled.div`
  button {
    height: 30px;
    border-radius: 0 3px 3px 0;
    background-color: #ffffff;
    border: solid 1px #bbbbbb;
    text-align: left;
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #333333;
    width: 158px;
    cursor: pointer;
  }

  .add-icon {
    border-radius: 3px 0px 0px 3px;
    width: 30px;
    height: 30px;
    background-color: #ffffff;
    border: solid 1px #bbbbbb;
    border-right: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div.add-widget-button {
    display: flex;
    align-items: flex-end;
  }
`

const SmallAddWidgetButton = () => (
  <SmallAddWidgetButtonWrapper>
    <AddWidgetButton />
  </SmallAddWidgetButtonWrapper>
)

export default SmallAddWidgetButton;
