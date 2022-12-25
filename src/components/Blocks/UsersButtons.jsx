import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { NewButton } from "./Button";
import { Select } from "./Select";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  gap: 1rem;
`;

const UsersButtons = () => {
  return (
    <>
      <ButtonsContainer>
        <Link to="/new-user">
          <NewButton>+ New User</NewButton>
        </Link>
        <Select>
          <option value="joined_AZ">Joined date: Newest first</option>
          <option value="joined_ZA">Joined date: Oldest first</option>
          <option value="name_AZ">Name: A-Z</option>
          <option value="name_ZA">Name: Z-A</option>
        </Select>
      </ButtonsContainer>
    </>
  );
};

export default UsersButtons;
