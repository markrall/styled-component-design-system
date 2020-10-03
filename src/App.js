// TODO
// -> create button to set input field value

import React, { useEffect, useState } from "react";

import Layout from "./components/Layout/Layout";
import GlobalStyle from "./components/UI/GlobalStyles";
import Input from "./components/UI/Input";

export default function App() {
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    console.info("Input value: ", inputValue);
  });

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>React Input Component</h1>
        <h2>Customisable styled component</h2>
        <Input onChange={onChangeHandler} />
        <Input
          disabled
          id="email"
          label="Your email"
          onChange={onChangeHandler}
          placeholder="e.g. yourname@example.com"
          required
          type="email"
        />
        <Input
          big
          onChange={onChangeHandler}
          id="age"
          label="Your age"
          max="100"
          min="18"
          placeholder="Between 18 and 100. e.g. 45"
          required
          type="number"
        />
      </Layout>
    </>
  );
}
