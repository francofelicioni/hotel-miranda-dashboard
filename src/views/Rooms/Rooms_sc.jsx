import styled, { css } from "styled-components";

const RoomsContainer = styled.div``;


const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;

const Image = styled.img`
  border-radius: 8px;
  width: 150px;
  height: 77px;
  object-fit: cover;
  margin: .5rem 0;
`;

const NameInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Id = styled.p`
  color: var(--color-greenGrey);
  font-size: 14px;
  text-align: left;
`;

const Number = styled.p`
  font-weight: 600;
  color: var(--color-grey39);
  font-size: 1rem;
`;

const RoomData = styled.td`
  vertical-align: center;
  padding: 1rem 0;
`;

const Info = styled.p`
  font-weight: 500;
  color: var(--color-grey39);
  font-size: 1rem;
  max-width: 300px;
`;

const Status = styled.p`
  padding: 10px 5px;
  border-radius: 12px;
  text-align: center;

  ${(props)=>  {
    switch (props.$typeStatus) {
      case true:
        return css`
          color: var(--color-white);
          background-color: var(--color-greenLight);
          font-weight: 600;
        `;
      case false:
        return css`
         color: var(--color-white);
         background-color: var(--color-red);
         font-weight: 600;
        `;
      default:
        return css`
          background-color: transparent;
          color: var(--color-black);
          font-weight: 600;
        `
    }
  }}
`;

export {
  RoomsContainer,
  NameContainer,
  Image,
  NameInfo,
  Id,
  Number,
  RoomData,
  Info,
  Status,
};
