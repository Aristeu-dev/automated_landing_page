import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box ;
        outline:0
    }
    body{
        /* background: #E5E5E5; */
        color: #FFF;
        -webkit-font-smoothing: antialiased;
    }
    body , input , button {
        font-family: 'Lato', sans-serif;
        font-size: 16px;
     
    }
    a { 
        text-decoration: none; 
    }
     h2, h3, h4 ,h5 ,h6, strong {
        font-weight: 400;
    }
    h1 {
        font-weight: 900;

    }
    button {
        cursor: pointer;
    }
    
`;
