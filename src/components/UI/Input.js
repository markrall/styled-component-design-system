import React from "react";
import styled, { css } from "styled-components";

import Label from "./Label";

// Based on:
// -> https://www.smashingmagazine.com/2020/07/styled-components-react/
// -> https://levelup.gitconnected.com/building-a-reusable-component-system-with-react-js-and-styled-components-4e9f1018a31c
// -> https://css-tricks.com/a-complete-guide-to-calc-in-css/

// Continue adding functionality for:
// -> https://www.w3schools.com/tags/tag_input.asp

const baseStyle = css`
  --color-fg: #eee;
  --color-mg: #ddd;
  --color-bg: #444;
  --font-size: inherit;
  --padding: 0.5rem;
  --margin: 0.5rem;
  --big: 1.75;
`;

const StyledInput = styled.input.attrs((props) => ({
  type: props.type || "text"
}))`
  ${baseStyle};
  border: none;
  border-radius: 2px;
  background-color: var(--color-bg);
  color: var(--color-fg);
  font-family: inherit;
  font-size: var(--font-size);
  margin-top: var(--margin);
  margin-bottom: calc(var(--margin) * 3);
  outline: none;
  padding: var(--padding);
  width: 100%;

  ::placeholder {
    color: var(--color-mg);
  }

  ${(props) => {
    return (
      props.big &&
      css`
        border-radius: calc(1px * var(--big));
        font-size: calc(var(--big) * 1rem);
        margin: calc(var(--margin) * var(--big)) auto;
        padding: calc(var(--padding) * var(--big));
      `
    );
  }}
`;

const Input = ({ id, big, ...props }) => {
  return (
    <Label forName={id} big={big} label={props.label}>
      <StyledInput id={id} big={big} {...props} />
    </Label>
  );
};

export default Input;
