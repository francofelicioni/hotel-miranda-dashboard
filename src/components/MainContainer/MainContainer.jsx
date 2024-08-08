import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';


const Container = styled.div`
  position: absolute;
  width: ${(props) => (props.path === "/login" ? "100%" : "85%")};
  top: ${(props) => (props.path === "/login" ? "0" : "9rem")};
  right: 0;
  padding: ${(props) => (props.path === '/login' ? '0' : '1rem')};
  display: flex;
  flex-direction:column;
  background-color: var(--color-greyF8);
  border-radius: 10px;
  @media (max-width: 1600px) {
    padding: 1rem 2rem 1rem 3rem;
    margin: 0;
    top: ${(props) => (props.path === "/login" ? "0" : "6rem")};
  }

`;

const MainContainer = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
    <Header />
    <SideMenu />
    <Container id="mainContainer" path={pathname}>
      {children}
    </Container>
    </>
  );
};

export default MainContainer;
