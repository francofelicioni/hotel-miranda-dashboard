import styled  from "styled-components";

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
  margin: 0.5rem 0;
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
  max-width: 100px;
  text-align: left;
`;

export { NameContainer, Image, NameInfo, Id, Number, RoomData, Info };
