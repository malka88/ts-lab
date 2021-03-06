import React, {useState} from 'react'
import styled from 'styled-components'
import Button from './Button'
import Logo from './Logo'

const Section = styled.section`
  width: 100vw;
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

  @media (max-width: 64em) {
    /* 1024px */
    position: fixed;
    top: ${props => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(2px);

    transform: ${props => props.click ? 'translateY(0)' : `translateY(1000%)`};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content: center;
  } 
`

const MenuItem = styled.li`
  margin: 0 1rem;
  position: relative;
  white-space: nowrap;
  color: ${props => props.theme.text};
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxs};
  }

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
    left: 0;
    pointer-events: none;
  }

  @keyframes glitchLine {

    0% { transform: scale3d(1, 1, 1); }

    10% { transform: translate3d(10px, 0, 0); }

    20% { transform: translate3d(0, 4px, 0); }

    30% { transform: scale3d(0.1, 1.4, 1) translate3d(0, -25px, 0); transform-origin: 100% 0%; }

    40% { transform: scale3d(1, 0.3, 1) translate3d(0, 25px, 0); }

    50% { transform: scale3d(0.5, 0.3, 1) translate3d(-100px, -80px, 0); }

    60% { transform: scale3d(1, 1.25, 1) translate3d(10px, -5px, 0); }

    70% { transform: scale3d(0.5, 0.5, 1) translate3d(0, 20px, 0); }

    80% { transform: translate3d(-30, 10px, 0) scale3d(1, 0.4, 1); transform-origin: 100% 0%; }

    90% { transform: scale3d(1, 0.5, 1) translate3d(0, -15px, 0); transform-origin: 0% 50%; }

    100% { opacity: 1; }
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after, ::before{
      display: none;
    }
  }
`

const HamburgerMenu = styled.span`
  width: ${props => props.click ? '2rem' : '1.5rem'};
  height: 2px;
  background: ${props => props.theme.text};

  position: absolute;
  top: 2.75rem;
  left: 50%;
  transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    display: flex;
  } // 1024px

  &::after, &::before{
    content: '';
    width: ${props => props.click ? '1rem' : '1.5rem'};
    height: 2px;
    right: ${props => props.click ? '-2px' : '0'};
    background: ${props => props.theme.text};
    position: absolute;
  }

  &::after{
    top: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'};
  }

  &::before{
    bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'};
  }
`

const Navigation = () => {

  const [click, setClick] = useState(false)

  const scrollTo = (id) => {

    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })

    setClick(!click);
  }

  return (
    <Section>
      <NavBar>
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo('Courses')}>??????????</MenuItem>
          <MenuItem onClick={() => scrollTo('Benefits')}>????????????????????????</MenuItem>
          <MenuItem onClick={() => scrollTo('Footer')}>????????????????</MenuItem>
        </Menu>
          <Button link="https://docs.google.com/forms/d/e/1FAIpQLSdNHOth76tTbyqo9zbLkQrjM--AIjNxyL3jkpXfOXyu2QY9DQ/viewform" target="_blank" text="????????????????????"/>
      </NavBar>
    </Section>
  )
}

export default Navigation