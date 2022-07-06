import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Section = styled.section`

  width: 100vw;
  background-color: ${props => props.theme.text};

  padding-top: 4rem;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 64em) {
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 2rem;
    align-items: center;
  }
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${props => props.theme.body};
`

const Contacts = styled.div`

  @media (max-width: 64em){
    font-size: ${props => props.theme.fontsm};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
  }
`

const Button = styled.a`
  pointer-events: auto;
	cursor: pointer;
  position: relative;
  white-space: nowrap;
  color: ${props => props.theme.body};
  align-self: center;

  @media (max-width: 64em){
    font-size: ${props => props.theme.fontsm};
  }

  &::before,
  &::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${props => props.theme.body};
    top: 100%;
    left: 0;
    pointer-events: none;
}

  &::before {
    height: 100%;
    top: 0;
    opacity: 0;
    content: '';
  }

  &:hover::before {
    opacity: 1;
    animation: coverUp 0.3s ease forwards;
  }

  @keyframes coverUp {
    0% {
        transform-origin: 50% 100%;
        transform: scale3d(1, 0.045, 1);
    }

    50% {
        transform-origin: 50% 100%;
        transform: scale3d(1, 1, 1);
    }

    51% {
        transform-origin: 50% 0%;
        transform: scale3d(1, 1, 1);
    }

    100% {
        transform-origin: 50% 0%;
        transform: scale3d(1, 0.045, 1);
    }
  }

  &::after {
      content: '';
      transition: opacity 0.3s;
  }

  &:hover::after {
      opacity: 0;
  }
`


const Footer = () => {

  return (
    <Section id="Footer">
      <Container>
        <Block>
          <Contacts>
            <p>Бориса Богаткова, 51</p><br/>
            <p>© 2022 Лаборатория Цифровизации</p>
          </Contacts>
        </Block>
        <Block>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdNHOth76tTbyqo9zbLkQrjM--AIjNxyL3jkpXfOXyu2QY9DQ/viewform" target="_blank">
            <span>Записаться</span>
          </Button><br/>
          <Logo />
        </Block>
      </Container>
    </Section>
  )
}

export default Footer