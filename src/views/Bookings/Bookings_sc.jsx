import styled from "styled-components";

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
`;

export {
  GuestContainer,
  Img,
  Name,
  Id,
  DataContainer,
  Text,
};
