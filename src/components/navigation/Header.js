import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo-foodiq.svg';
import MainNav from './MainNav';
import SideNav from './SideNav';

const HeaderWrapper = styled.header`
  h1 {
    font-size: 20px;
  }

  .app-logo {
    height: 23.5px;
    object-fit: contain;
    margin: 0 64px;
  }

  width: 1300px;
  height: 60px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logo} className="app-logo" alt="logo" />
      <MainNav />
      <SideNav />
    </HeaderWrapper>
  );
};

export default Header;
