import React from "react";

import styled from "styled-components";
import { Button } from "./Button";
import { Select } from "./Select";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  gap: 1rem;
`;

const RoomsButtons = () => {
  return (
    <>
      <ButtonsContainer>
          <Button $type="new">+ New Room</Button>
          <Select>
            <option value="room_number">Room Number</option>
            <option value="state">State</option>
            <option value="price_AZ">Price: Cheapest firts</option>
            <option value="price_ZA">Price: Expensive first</option>
          </Select>
      </ButtonsContainer>
    </>
  );
};

export default RoomsButtons;
