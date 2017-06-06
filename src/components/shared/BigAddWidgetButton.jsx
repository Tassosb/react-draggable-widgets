import React from 'react';
import styled from 'styled-components';
import AddWidgetButton from './AddWidgetButton';

const BigAddWidgetButtonWrapper = styled.div`
  button {
    border: none;
    outline: none;
    background: none;

    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #333333;
    cursor: pointer;
  }

  button.add-text {
    margin-bottom: 29px;
    margin-top: 19.9px;
  }

  .add-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 70px;
      width: 70px;

    }
    margin-top:31.9px;
  }

  div.add-widget-button {
    display: flex;
    flex-direction: column;
    width: 168px;
    height: 168px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.45);
    border: solid 1px #cccccc;
    cursor: pointer;
  }
`

const BigAddWidgetButton = () => (
  <BigAddWidgetButtonWrapper>
    <AddWidgetButton />
  </BigAddWidgetButtonWrapper>
)

export default BigAddWidgetButton;
