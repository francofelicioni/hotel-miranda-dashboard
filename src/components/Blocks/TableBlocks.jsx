import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  background-color: #ffffff;
  border-radius: 20px;
  width: 100%;
`;

const Row = styled.tr`
  border-bottom: 1px solid var(--color-greyD4);
  border-top: 1px solid var(--color-greyD4);

  &:hover {
    box-shadow: 0px 4px 30px #00000014;
  }
`;

const TableTitle = styled.th`
  font-weight: 600;
  padding: 1rem .5rem;
  text-align: left;
`;

const CheckboxContainer = styled.td`
  /* width: 20px; */
  padding-right: 35px;
  padding-left: 10px;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

export { Table, Row, TableTitle, CheckboxContainer, Checkbox}

