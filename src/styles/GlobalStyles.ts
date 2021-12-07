import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', sans-serif;
  }

  html {
    background: #151718
  }
  
  :root {
    --white: #FFFF;
    --black: #0D1117;
    --grey:  #F2F2F2;
    --dark-grey: #5B5B5B;
    --orange-salmon: #F78166;
    --blue: #58A6FF;
  }
`;
