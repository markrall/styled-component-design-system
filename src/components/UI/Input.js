import React from "react";
import styled, { css } from "styled-components";

// Based on:
// -> https://www.smashingmagazine.com/2020/07/styled-components-react/
// -> https://levelup.gitconnected.com/building-a-reusable-component-system-with-react-js-and-styled-components-4e9f1018a31c
// -> https://css-tricks.com/a-complete-guide-to-calc-in-css/

const baseStyle = css`
  --font-size: inherit;
  --padding: 0.5rem;
  --margin: 0.5rem;
  --big: 1.75;
`;

const StyledLabel = styled.label`
  ${baseStyle};
  font-weight: bold;

  ${(props) => {
    return (
      props.big &&
      css`
        font-size: calc(var(--big) * 1rem);
      `
    );
  }}
`;

const StyledInput = styled.input.attrs((props) => ({
  type: props.type || "text",
  placeholder: props.placeholder || "Enter text...",
  required: props.required || false
}))`
  ${baseStyle};
  border: none;
  border-radius: 2px;
  background-color: var(--color-foreground);
  color: var(--color-background);
  font-family: inherit;
  font-size: var(--font-size);
  margin-top: var(--margin);
  margin-bottom: calc(var(--margin) * 3);
  outline: none;
  padding: var(--padding);
  width: 100%;

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

  &::placeholder {
    color: #666;
  }
`;

const Input = ({ type, placeholder, big, ...props }) => {
  return (
    <StyledLabel big={big}>
      {props.label ? props.label : "Label"}
      <StyledInput placeholder={placeholder} type={type} big={big} {...props} />
    </StyledLabel>
  );
};

export default Input;
