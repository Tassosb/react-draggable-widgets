import React from 'react';
import styled from 'styled-components';

import BigAddWidgetButton from '../shared/BigAddWidgetButton';
import WidgetIndex from './WidgetIndex';

const WidgetDisplayWrapper = styled.section`
  padding: 31px 0 62px 0;
`

const WidgetDisplay = () => {
  return (
    <WidgetDisplayWrapper>
      <WidgetIndex />
      <BigAddWidgetButton />
    </WidgetDisplayWrapper>
  )
}

export default WidgetDisplay;
