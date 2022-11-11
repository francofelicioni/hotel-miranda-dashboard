import styled from "styled-components";

const BookingContainer = styled.div`
  position: absolute;
  width: 80%;
  right: 0;
  bottom: 350px;
`;

const Table = styled.table`
  border-collapse: collapse;
  background-color: #ffffff;
  border-radius: 20px;
  width: 100%;
`;

const TableTitle = styled.th`
  font-weight: 600;
  text-align: start;
  padding: 20px 0 20px 30px;
`;

const Row = styled.tr`
  border-bottom: 1px solid var(--color-greyD4);
  border-top: 1px solid var(--color-greyD4);

  &:hover {
    box-shadow: 0px 4px 30px #00000014;
  }
`;

const CheckboxContainer = styled.div`
  width: 20px;

  .checkbox {
    width: 24px;
    height: 24px;
  }
`;

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
  padding-left: 30px;
`;

const NotesButton = styled.button`
  /* background: transparent; */
  max-width: 200px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 60px;
  margin-top: 15px;
  width: 24px;
  height: 24px;
`;

const Status = styled.p`
  padding: 13px 25px;
  border-radius: 12px;
  text-align: center;
  margin-left: 30px;
`;

export {
  BookingContainer,
  Table,
  TableTitle,
  Row,
  GuestContainer,
  CheckboxContainer,
  Img,
  Name,
  Id,
  DataContainer,
  Text,
  Button,
  NotesButton,
  Status,
};
