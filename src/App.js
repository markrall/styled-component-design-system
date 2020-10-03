import React from "react";

import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout/Layout";
import Input from "./components/UI/Input";

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

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>React Input Component</h1>
        <h2>Customisable styled component</h2>
        <Input />
        <Input required type="email" placeholder="Enter email..." />
        <Input big required placeholder="Make it happen..." />
      </Layout>
    </>
  );
}
