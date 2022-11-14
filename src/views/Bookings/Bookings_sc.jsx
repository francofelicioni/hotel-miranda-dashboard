import styled, { css } from "styled-components";

// const BookingContainer = styled.div``;

const GuestContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;

const Img = styled.img`
  border-radius: 8px;
  width: 45px;
  height: 45px;
  object-fit: cover;
`;

const Name = styled.p`
  font-weight: 600;
  color: var(--color-grey39);
  font-size: 1rem;
`;

const Id = styled.p`
  color: var(--color-greenGrey);
  font-size: 14px;
  text-align: left;
`;

const DataContainer = styled.td`
  vertical-align: center;
  padding: 1rem 0;
`;

const Text = styled.p`
  color: var(--color-grey39);
  font-size: 1rem;
  max-width: 300px;
  /* padding-left: 30px; */
`;

const NotesButton = styled.button`
  /* background: transparent; */
  width: 160px;
  height: 48px;
  background: var(--color-greenExtraLigth);
  border-radius: 12px;
  max-width: 200px;
  color: var(--color-black21);
  font-family: var(--font-main);
  font-weight: 600;
  border: none;

  &:hover {
    background: transparent;
    color: var(--color-greenGrey);
    border: 1px solid var(--color-greenGrey);
  }
`;


const Status = styled.p`
  padding: 10px 5px;
  border-radius: 12px;
  text-align: center;

  ${(props) => {
    switch (props.$typeStatus) {
      case "Check In":
        return css`
          background-color: var(--color-greenExtraLigth2);
          color: var(--color-greenLight);
          font-weight: 600;
        `;
      case "Check Out":
        return css`
          color: var(--color-red);
          background-color: var(--color-backGroundRed);
          font-weight: 600;
        `;
      case "In Progress":
        return css`
          color: var(--color-organgeStatus);
          background-color: #FFF5E8;
          font-weight: 600;
        `;
      default: 
        return css`
        background-color: transparent;
        color: var(--color-black);
        `
    }
  }}
`;

export {
  // BookingContainer,
  GuestContainer,
  Img,
  Name,
  Id,
  DataContainer,
  Text,
  NotesButton,
  Status,
};
