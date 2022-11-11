import styled from "styled-components";

const RoomsContainer = styled.div`
  position: absolute;
  width: 80%;
  right: 0;
  bottom: -10px;
`;

const Table = styled.table`
  border-collapse: collapse;
  background-color: #ffffff;
  border-radius: 20px;
  width: 100%;

  .checkbox {
    width: 24px;
    height: 24px;
  }
`;

const TableTitle = styled.th`
  font-weight: 600;
  text-align: start;
  padding: 20px 0 20px 30px;
`;

const Row = styled.tr`
  border-bottom: 1px solid var(--color-greyD4);
  border-top: 1px solid var(--color-greyD4);
`;

const CheckboxContainer = styled.div`
  width: 20px;
`;

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
  padding-left: 30px;
`;

const RoomStatus = styled.p`
  /* color: white; */
  padding: 13px 25px;
  border-radius: 12px;
  text-align: center;
  margin-left: 30px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 60px;
  margin-top: 15px;
`;

export {
  RoomsContainer,
  Table,
  TableTitle,
  Row,
  CheckboxContainer,
  NameContainer,
  Image,
  NameInfo,
  Id,
  Number,
  RoomData,
  Info,
  RoomStatus,
  Button,
};
