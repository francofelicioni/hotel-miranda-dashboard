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
  text-align: start;
  padding: 20px 0;
  text-align: left;
`;

const CheckboxContainer = styled.div`
  width: 20px;
  padding-right: 35px;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 60px;
  margin-top: 15px;
  width: 24px;
  height: 24px;
`;



export { Table, Row, TableTitle, CheckboxContainer, Checkbox, Button}

