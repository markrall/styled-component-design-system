import React from "react";
import styled from "styled-components";

const StyledLayout = styled.div.attrs((props) => ({
  width: props.width || "100%"
}))`
  margin: 0 auto;
  padding: 1rem;
  width: ${(props) => props.width};
`;

const Layout = (props) => (
  <StyledLayout width={props.width}>{props.children}</StyledLayout>
);

export default Layout;
