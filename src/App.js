import React from "react";

import Layout from "./components/Layout/Layout";
import GlobalStyle from "./components/UI/GlobalStyles";
import Input from "./components/UI/Input";

export default function App() {
  const onChangeHandler = (e) => {
    console.info("Input updated: ", e.target.id, e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>React Input Component</h1>
        <h2>Customisable styled component</h2>
        <Input id="general" label="My new label" />
        <Input
          changed={onChangeHandler}
          id="email"
          label="Your email"
          placeholder="e.g. yourname@example.com"
          required
          type="email"
        />
        <Input
          big
          changed={onChangeHandler}
          id="age"
          label="Your age"
          placeholder="e.g. 45"
          required
          type="number"
        />
      </Layout>
    </>
  );
}
