import React from 'react'
import styled from 'styled-components'
import TypeWriterText from '../TypeWriterText'
import RoundText from '../../assets/roundText.png'
import Hexagons from '../../assets/Hexagons.svg'
import { keyframes} from "styled-components"

const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${props => props.theme.body};
`

const Container = styled.div`
  width: 100%;
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 48em){
    justify-content: center;
    align-items: center;
  }

`
const Ection = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: right;
  align-items: center;
  flex-direction: row;
`

const Triangle = styled.div`
  height: 50vh;
  width: 30vw;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`

const rotate = keyframes`
  100%{
    transform: rotate(1turn);
  }
`

const Round = styled.div`
  width: 20rem;
  height: 20rem;
  transform: translate(20%, -25%);

  @media (max-width: 64em){
    width: 15rem;
    height: 15rem;
  }

  @media (max-width: 48em){
    width: 10rem;
    height: 10rem;
  }

  img{
    width: 100%;
    height: auto;
    animation: ${rotate} 15s linear infinite;
    border: 1px solid ${props => props.theme.text};
    border-radius: 50%;
  }
`

const Circle = styled.span`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  @media (max-width: 70em){
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 48em){
    width: 2rem;
    height: 2rem;
  }

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);

  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  font-size: ${props => props.theme.arrowSize};
  font-style: 200;
`

const Home = () => {
  return (
    <Section>
      <Container>
        <Ection>
          <Round>
            <Circle>
              &#x2193;
            </Circle>
            <img src={RoundText} alt=""/>
          </Round>
          <Triangle>
          <img src={Hexagons} alt=""/>
          </Triangle>
        </Ection>
        <TypeWriterText />
      </Container>
    </Section>
  )
}

export default Home