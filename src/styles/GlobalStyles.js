import { createGlobalStyle } from "styled-components";
import "@fontsource/montserrat";
import "@fontsource/anonymous-pro";
import "@fontsource/dotgothic16";

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;

}

h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;
}

a{
    color: inherit;
    text-decoration: none;
}
`

export default GlobalStyles;