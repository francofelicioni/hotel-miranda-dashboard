import React from "react";

import styled from "styled-components";
import { Button } from "./Button";

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const ViewsNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`;

const Title = styled.p`
  display: flex;
  font-size: 20px;
  color: #135846;
  color: var(--unnamed-color-393939);
  text-align: left;
  font: normal normal 600 18px/27px Poppins;
  letter-spacing: 0px;
  color: #393939;
  opacity: 1;

  &:hover {
    border-bottom:#135846;
  }
`;

const Select = styled.select`
  width: 160px;
  height: 48px;
  background: white;
  border-radius: 12px;
  max-width: 200px;
  color: #135846;
  padding-left: 40px;
  font-family: var(--font-main);
  font-weight: 600;
  border: 1px solid green;
  cursor: pointer;
`;

const ViewsNavigation = ({ n1, n2, n3, b1}) => {
  return (
    <>
      <ViewsNavigationContainer>
        <Container>
          <Title>{n1}</Title>
          <Title>{n2}</Title>
          <Title>{n3}</Title>
        </Container>
        <Container>
          <Button $type="new">{b1}</Button>
          <Select>
            <option value="newest">Newest</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-B">Z-B</option>
            <option value="oldest">Odlest</option>
          </Select>
          <Button />
        </Container>
      </ViewsNavigationContainer>
    </>
  );
};

export default ViewsNavigation;
