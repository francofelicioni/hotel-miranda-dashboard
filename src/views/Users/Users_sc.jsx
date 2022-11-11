import styled from "styled-components";

const UsersContainer = styled.div``;

const Table = styled.table`
  border-collapse: collapse;
  background-color: #ffffff;
  border-radius: 20px;
  width: 100%;
`;

const CheckBox = styled.input`
  width: 24px;
  height: 24px;
`;

const HeaderTitle = styled.th`
  font-weight: 600;
  text-align: left;
`;

const Row = styled.tr`
  border-bottom: 1px solid var(--color-greyD4);
  border-top: 1px solid var(--color-greyD4);
  justify-content: center;
  align-items: center;
`;

const UserDataName = styled.div`
  display: flex;
`;

const UserInfo = styled.div`
  padding: 0 1rem;
`;

const UserName = styled.p`
  font-size: 1rem;
  color: #393939;
  opacity: 1;
  font-size: 1rem;
  color: #393939;
  opacity: 1;
`;

const UserId = styled.p`
  text-align: left;
  font-size: 14px;
  color: #799283;
`;

const UserDate = styled.p`
  text-align: left;
  font-size: 14px;
  color: #393939;
`;

const UserData = styled.div`
  width: 200px;
`;

const DataContact = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ButtonContainer = styled.div`
  padding-right: 30px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
`;

const DeleteIcon = styled.button`
  width: 25px;
  height: 25px;
`;

const CheckboxContainer = styled.div`
  width: 20px;
`;

const UserStatus = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: left;
`;

export {
  UsersContainer,
  Table,
  CheckBox,
  HeaderTitle,
  Row,
  UserDataName,
  UserInfo,
  UserName,
  UserId,
  UserDate,
  UserData,
  DataContact,
  ButtonContainer,
  Button,
  DeleteIcon,
  CheckboxContainer,
  UserStatus,
};
