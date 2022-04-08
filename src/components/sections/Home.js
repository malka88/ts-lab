import React from 'react'
import styled from 'styled-components'
import TypeWriterText from '../TypeWriterText'
import RoundText from '../../assets/roundText.png'
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
  margin: 0 auto;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;

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
  width: 40vw;
  background-color: ${props => props.theme.highlight};
  -webkit-clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
`

const rotate = keyframes`
  100%{
    transform: rotate(1turn);
  }
`

const Round = styled.div`
  width: 15rem;
  height: 15rem;
  transform: translate(20%, -20%);

  img{
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }
`

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);

  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  font-size: ${props => props.theme.arrowSize};
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
            <img src={RoundText} alt="Курс" />
          </Round>
          <Triangle />
        </Ection>
        <TypeWriterText />
      </Container>
    </Section>
  )
}

export default Home