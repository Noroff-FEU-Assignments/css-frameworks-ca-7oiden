import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
    
    *, *:before, *:after {
    box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        margin: 0;
        background-color: ${(props) => props.theme.colorBackgroundGrad2};
        font-family: ${(props) => props.theme.fontPrimary};
        font-size: 1rem;
    }

    #root {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .wrapper {
        flex: 1 0 auto;
    }

    .brand {
        font-family: ${(props) => props.theme.fontMainHeadings};
        color: ${(props) => props.theme.colorPrimary} !important;
        font-style: italic;
        font-weight: bold;
        margin: 0 2rem 0 7.5%;

        @media (min-width: 992px) {
    margin: 0 2rem 0 5%;
  }
        
    }

    .d-flex {
        color: black;
    }

    .navbar-toggler {
        padding: 0 7.5% 0 0;
    }
`;

export default Globalstyle;
