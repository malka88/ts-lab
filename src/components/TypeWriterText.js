import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';

const Title = styled.h1`
    padding-left: 2rem;
    font-size: ${props => props.theme.fontxxl};
    color: ${props => props.theme.text};
    align-self: flex-start;

    @media (max-width: 64em){
        font-size: ${props => props.theme.fontxl};
    }

    @media (max-width: 48em){
        font-size: ${props => props.theme.fontlg};
    }

    span{
        font-family: 'Anonymous Pro', monospace;
        font-size: ${props => props.theme.extraSize};
        color: ${props => props.theme.highlight};

        @media (max-width: 64em){
            font-size: ${props => props.theme.extraSizeM};
        }

        @media (max-width: 48em){
            font-size: ${props => props.theme.extraSizeS};
        }
    }
`


const TypeWriterText = () => {
  return (
    <Title>
        Открой себя в
        <Typewriter
            options={{
                autostart: true,
                loop: true
            }}
            onInit={(typewriter) => {
                typewriter.typeString('<span>веб-разработке</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span>геймдизайне</span>')
                .pauseFor(2000)
                .deleteAll()
                .start()
            }}
        />
    </Title>
    
  )
}

export default TypeWriterText