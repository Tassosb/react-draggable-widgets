import React, { Component } from 'react';
import styled from 'styled-components';
import '../styles/reset.css';

import Header from './navigation/Header';
import DashboardNav from './dashboards/DashboardNav';
import DashboardControl from './dashboards/DashboardControl';
import WidgetDisplay from './widgets/WidgetDisplay';

const AppWrapper = styled.section`
  background-color: #f8f8f8;
  width: 1300px;
  main {
    margin: 0 64px;
    min-height: 800px;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <DashboardNav />
        <main>
          <DashboardControl />
          <WidgetDisplay />
        </main>
      </AppWrapper>
    );
  }
}

export default App;
