import React from 'react';
import styled from 'styled-components';

const Btn = styled.a`
	background: none;
    pointer-events: auto;
	cursor: pointer;
	border: none;
	padding: 1.5rem 3rem;
	margin: 0;
    color: ${props => props.theme.body};

	position: relative;
	display: inline-block;

    @media (max-width: 64em) {
        padding: 1rem 2rem;
        font-size: ${props => props.theme.fontmd};
    }

    @media (max-width: 48em) {
        padding: 1rem 0.5rem;
        font-size: ${props => props.theme.fontxs};
    }


    &::before,
    &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    & span {
        display: block;
        mix-blend-mode: hard-light;
        transition: transform 0.4s cubic-bezier(0.2, 1, 0.8, 1);
    }

    &:hover span {
        transform: translate3d(-5px,0,0);
    }

    &::before {
        content: '';
        background: ${props => props.theme.text};
        -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);
        clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);
        transition: clip-path 0.4s cubic-bezier(0.2, 1, 0.8, 1), -webkit-clip-path 0.4s cubic-bezier(0.2, 1, 0.8, 1);
    }

    &:hover::before {
        background: #000;
        -webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
        clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
        background: ${props => props.theme.text};
    }
`

const Button = ({text, link, target}) => {
  return (
    <Btn href={link} target={target}>
        <span>{text}</span>
    </Btn>
  )
}

export default Button