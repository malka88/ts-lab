import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from 'styled-components';

const LogoText = styled.h1`
    font-family: 'DotGothic16', sans-serif;
    font-size: ${props => props.theme.fontxxxl};
    color: ${props => props.theme.text};
`

const Logo = () => {
  return (
    <Router>
        <LogoText>
            <Link to="/">
                Ц.
            </Link>
        </LogoText>
    </Router>
  )
}

export default Logo