import { createGlobalStyle } from 'styled-components';

import { COLORS } from './contants';

export const GlobalStyle = createGlobalStyle`

:root {
  --bg-blue100: ${COLORS.blue100};
  --bg-blue10: ${COLORS.blue10};

  --text-gray4: ${COLORS.text_gray};
  --text-gray-disabled: ${COLORS.text_gray_disabled};
  --text-white: ${COLORS.text_white};

  --bg-default: ${COLORS.default};
  --bg-default-focus: ${COLORS.default_focus};
  --bg-primary: ${COLORS.primary};
  --bg-primary-focus: ${COLORS.primary_focus};
  --bg-secondary: ${COLORS.secondary};
  --bg-secondary-focus: ${COLORS.secondary_focus};
  --bg-danger: ${COLORS.danger};
  --bg-danger-focus: ${COLORS.danger_focus};
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

  body, input, textarea, button {
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
  }

  button {
    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
    cursor: pointer;
    background: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  [disabled] {
    cursor: not-allowed;

  }

`;
