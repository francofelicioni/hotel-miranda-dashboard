import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: ${(props) => (props.path === "/login" ? "100%" : "82%")};
  top: ${(props) => (props.path === "/login" ? "0" : "7rem")};
  right: 0;
  padding: ${(props) => (props.path === '/login' ? '0' : '1.875rem')};
  background-color: var(--color-greyF8);
`;

const MainContainer = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <Container class="mainContainer" path={pathname}>
      {children}
    </Container>
  );
};

export default MainContainer;
