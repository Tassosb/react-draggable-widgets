import React from 'react';
import styled from 'styled-components';
import iconNameArrow from '../../assets/icons/icon-namearrow.svg';

const SideNavWrapper = styled.nav`
  align-self: flex-end;
  padding-bottom: 31px;
  padding-right: 71px;
  display: flex;
  flex: 1;
  justify-content: flex-end;

  a {
    font-family: HelveticaNeue;
    font-size: 13px;
    color: #777777;
    cursor: pointer;
  }

  .help-contact {
    width: 98px;
    height: 16px;
    text-align: right;
    padding-right: 32px;
  }
`

const SideNav = () => (
  <SideNavWrapper>
    <a className='help-contact'>Help  |  Contact</a>
    <a>John Jones</a>
    <img src={iconNameArrow}
     className="icon-namearrow" alt='arrow'/>
  </SideNavWrapper>
)

export default SideNav;
