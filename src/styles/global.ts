import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-dark"]};
}

body{
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme["base-text"]};
    margin-bottom: 5rem;
    -webkit-font-smoothing: antialiased;

}
body, input, textarea, button{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
}

input, textarea, button, a{
    border-radius: 6px;

}
h1, h2, h4{
    font-family: 'Baloo 2', cursive;
    font-weight: 800;

}
h1{
    color: ${(props) => props.theme["base-title"]};
    font-size: 2.8rem;
}
h2{
    color: ${(props) => props.theme["base-title"]};
    font-size: 2rem;
    
}
h3{
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    font-weight: 400;

    }
    h4{
        font-size: 1.25rem;
    }
p{
        color: ${(props) => props.theme["base-text"]}
    }
`;
