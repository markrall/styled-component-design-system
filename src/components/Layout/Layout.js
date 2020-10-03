import React from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
  margin: 0 auto;
  padding: 1rem;
`;

const Layout = (props) => <StyledLayout>{props.children}</StyledLayout>;

export default Layout;
