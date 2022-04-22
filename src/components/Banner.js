import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Section = styled.section`
    width: 100vw;
    height: 40rem;
    position: relative;
    background-color: ${props => props.theme.body};

    display: flex;
    justify-content: space-between;
    align-items: center;

    overflow: hidden;

    @media (max-width: 64em) {
        flex-direction: column;
        justify-content: center;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
`
const Container = styled.div`
    width: 50%;
    display: flex;
    margin-left: 4rem;
    margin-right: 4rem;
    flex-direction: column;
`

const Title = styled.h2`
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.text};
    font-weight: 400;

    @media (max-width: 64em){
        font-size: ${props => props.theme.fontsm};
        padding-bottom: 2rem;
    }

    span{
        font-family: 'Anonymous Pro', monospace;
        font-size: ${props => props.theme.fontxxl};
        color: ${props => props.theme.highlight};
        font-weight: 700;

        @media (max-width: 64em){
            font-size: ${props => props.theme.fontxl};
        }
    }
`

const Banner = () => {

  return (

    <Section>
        <Container>
            <Title>
                <span>Лаборатория цифровизации</span>
                <br/><br/>Выбери IT профессию будущего
            </Title>
        </Container>
        <Container>
            <Button link="https://docs.google.com/forms/d/e/1FAIpQLSdNHOth76tTbyqo9zbLkQrjM--AIjNxyL3jkpXfOXyu2QY9DQ/viewform" text="Связаться с нами" target="_blank" />
        </Container>
    </Section>
  )
}

export default Banner