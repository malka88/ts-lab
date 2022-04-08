import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Logo from './Logo';

const Section = styled.header`
  width: 100vw;
  background-color: ${props => props.theme.body};
`

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;
`

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`

const MenuItem = styled.li`
  margin: 0 1rem;
  position: relative;
  white-space: nowrap;
  color: ${props => props.theme.text};
  font-weight: ${props => props.theme.fontBold};
  cursor: pointer;

  &:hover {
    animation: glitchText 0.4s linear;
  }

  &::before {
    height: 2px;
    opacity: 0;
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.text};
    top: 100%;
    left: 0;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
    animation: glitchLine 0.4s steps(2, start) forwards;
}

  &::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${props => props.theme.text};
    left: 0;
    pointer-events: none;
  }

  @keyframes glitchLine {
    0% {
        transform: scale3d(1, 1, 1);
    }

    10% {
        transform: translate3d(10px, 0, 0);
    }

    20% {
        transform: translate3d(0, 4px, 0);
    }

    30% {
        transform: scale3d(0.1, 1.4, 1) translate3d(0, -25px, 0);
        transform-origin: 100% 0%;
    }

    40% {
        transform: scale3d(1, 0.3, 1) translate3d(0, 25px, 0);
    }

    50% {
        transform: scale3d(0.5, 0.3, 1) translate3d(-100px, -80px, 0);
    }

    60% {
        transform: scale3d(1, 1.25, 1) translate3d(10px, -5px, 0);
    }

    70% {
        transform: scale3d(0.5, 0.5, 1) translate3d(0, 20px, 0);
    }

    80% {
        transform: translate3d(-30, 10px, 0) scale3d(1, 0.4, 1);
        transform-origin: 100% 0%;
    }

    90% {
        transform: scale3d(1, 0.5, 1) translate3d(0, -15px, 0);
        ;
        transform-origin: 0% 50%;
    }

    100% {
        opacity: 1;
    }
}
`

const Navigation = () => {
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem>Курсы</MenuItem>
          <MenuItem>Контакты</MenuItem>
        </Menu>
        <Button text="Записаться" link="" />
      </NavBar>
    </Section>
  )
}

export default Navigation