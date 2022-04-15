import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
  --white: #fff;
  
  --bg-blue100: #3D5AFE;
  --bg-blue10: rgba(41, 98, 255, 0.1);

  --text-blue100: #3D5AFE;
  --text-gray4: #3F3F3F;
  --text-gray-disabled: #9E9E9E;
  --text-white: #fff;

  --bg-default: #E0E0E0;
  --bg-default-focus: #AEAEAE;
  --bg-primary: #2962FF;
  --bg-primary-focus: #0039CB;
  --bg-secondary: #455A64;
  --bg-secondary-focus: #1C313A;;
  --bg-danger: #D32F2F;
  --bg-danger-focus: #9A0007;

  --size-sm: 2rem;
  --size-md: 2.25rem;
  --size-lg: 2.625rem;
}

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
    
  html {
    @media (max-width: 1080px) {
      font-size:100%;
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



`
