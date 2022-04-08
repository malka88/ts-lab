import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
	background: none;
    pointer-events: auto;
	cursor: pointer;
	border: none;
	padding: 1.5rem 3rem;
	margin: 0;
    color: ${props => props.theme.body};

	position: relative;
	display: inline-block;

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
        mix-blend-mode: difference;
        transition: transform 0.4s cubic-bezier(0.2, 1, 0.8, 1);
    }

    &:hover span {
        transform: translate3d(-10px,0,0);
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
    }

`

const Button = ({text, link}) => {
  return (
    <Btn>
        <a href={link} aria-label={text} target="_blank" rel="noreferrer">
            <span>{text}</span>
        </a>
    </Btn>
  )
}

export default Button