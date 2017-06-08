import React, { Component } from 'react';
import styled from 'styled-components';
import '../styles/reset.css';

import Header from './navigation/Header';
import DashboardNav from './dashboards/DashboardNav';
import DashboardControl from './dashboards/DashboardControl';
import WidgetDisplay from './widgets/WidgetDisplay';
import AddWidgetDropdown from './widgets/dropdown/AddWidgetDropdown';

const AppWrapper = styled.section`
  background-color: #f8f8f8;
  width: 1300px;
  main {
    margin: 0 64px;
    min-height: 800px;
  }
  footer {
    border-top: 1px solid #dddddd;
    padding-top: 15px;
    p {
      height: 13px;
      font-family: HelveticaNeue;
      font-size: 11px;
      text-align: left;
      color: #777777;
    }
    span.underline {
      text-decoration: underline;
      font-family: HelveticaNeue;
    }
    padding-bottom: 61px;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AddWidgetDropdown />
        <Header />
        <DashboardNav />
        <main>
          <DashboardControl />
          <WidgetDisplay />
          <footer>
            <p>© 2017 FoodIQ  |  © <span className='underline'>Energy Metrics</span>, <span className='underline'>LLC</span></p>
          </footer>
        </main>
      </AppWrapper>
    );
  }
}

export default App;
