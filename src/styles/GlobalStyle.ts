import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --gray2: #4F4F4F;
}

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
    
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
    
  }

  body, input, textarea { 
    
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.2rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  button { 
    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.2rem;
    cursor: pointer;
  }

  


  [disabled] {
    cursor: not-allowed;

  }



`;