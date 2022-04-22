import React from 'react'
import styled from 'styled-components'
import Banner from './Banner';
import Logo from './Logo';

const Section = styled.section`
  min-height: 100%;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.text};
  position: relative;

  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  width: 100vw;
  height: 20rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
  margin-left: 4rem;
  margin-right: 4rem;
  flex-direction: column;

  color: ${props => props.theme.body};
`

const Contacts = styled.div`
  p{
    padding-bottom: 1rem;
  }

  @media (max-width: 64em){
    font-size: ${props => props.theme.fontsm};
  }
`


const Footer = () => {

  return (
    <Section id="Footer">
      <Banner />
      <Container>
        <Block>
          <Contacts>
            <p>Бориса Богаткова, 51</p>
            <p>khobyakova@gmail.com</p>
            <p>+79915052339</p><br/>
            <p>© 2022 Цифровая Лаборатория</p>
          </Contacts>
        </Block>
        <Block>
          <Logo />
        </Block>
      </Container>
    </Section>
  )
}

export default Footer