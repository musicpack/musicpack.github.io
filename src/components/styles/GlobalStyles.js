import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        /* disable text selection highliting */
        &::selection{
            background: none;
            color: none;
        }
    } 
`

export default GlobalStyles
