import React from "react";

import styled from "styled-components";
import { Select } from "./Select";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  gap: 1rem;
`;

const BookingButtons = ({ select }) => {
  return (
    <>
      <ButtonsContainer>
          <Select style={{ color: 'white', background: '#135846'}}> 
            <option value={select}>{select}</option>
            </Select>
          <Select>
            <option value="date">Order Date</option>
            <option value="guest">Guest</option>
            <option value="ckeck_in">Check in</option>
            <option value="check_out">Check out</option>
          </Select>
      </ButtonsContainer>
    </>
  );
};

export default BookingButtons;
