import React from 'react';
import styled from 'styled-components';
import LogoImg from '../assets/Logo.svg'

const LogoText = styled.a`
  cursor: pointer;
  font-size: ${props => props.theme.fontxxxl};
  
  img{
    width: ${props => props.theme.fontlg};

    @media (max-width: 64em){
      width: ${props => props.theme.fontmd};
    }
  }

  
`

const Logo = () => {
  return (
    <LogoText href='/'>
      <img src={LogoImg} alt=""/>
    </LogoText>
  )
}

export default Logo