import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  :root {
    --color-foreground: #eee;
    --color-background: #222;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
  }

  body {
    background-color: var(--color-background);
    box-sizing: border-box;
    color: var(--color-foreground);
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
