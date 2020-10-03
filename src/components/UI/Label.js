import React from "react";
import styled, { css } from "styled-components";

const baseStyle = css`
  --padding: 0.5rem;
  --margin: 0.5rem;
  --big: 1.75;
`;

const StyledLabel = styled.label.attrs((props) => ({
  htmlFor: props.forName || null
}))`
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

const Label = ({ forName, big, ...props }) => {
  const formatLabel = (text) => {
    const str = text || "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <StyledLabel forName={forName} big={big}>
      <span>{formatLabel(props.label)}</span>
      {props.children}
    </StyledLabel>
  );
};

export default Label;
