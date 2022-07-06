import React from 'react'
import styled from 'styled-components'
import TypeWriterText from '../TypeWriterText'
import CoverVideo from '../CoverVideo'

const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
`

const Container = styled.div`
  width: 100%;
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 48em){
    justify-content: center;
    align-items: center;
  }

`

const Home = () => {
  return (
    <Section>
      <CoverVideo />
      <Container>
        <TypeWriterText />
      </Container>
    </Section>
  )
}

export default Home