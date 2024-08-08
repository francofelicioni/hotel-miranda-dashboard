import React from "react";
import { Link } from "react-router-dom";
import { NewButton } from "./Button";
import { Select } from "./Select";
import styled from "styled-components";

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
        <Link to='/new-room'>
          <NewButton>+ New Room</NewButton>
        </Link>
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
