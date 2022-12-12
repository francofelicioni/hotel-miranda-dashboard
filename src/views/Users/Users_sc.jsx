import styled from "styled-components";

const UserDataName = styled.td`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const UserInfo = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const Image = styled.img`
width: 80px;
height: 80px;
margin: .5rem 0;
border-radius: 10px;
`

const UserName = styled.p`
  font-size: 1rem;
  color: var(--color-grey39);
  opacity: 1;
  font-size: 1rem;
  opacity: 1;
`;

const UserId = styled.p`
  text-align: left;
  font-size: 14px;
  color: var(--color-greenGrey);
`;

const UserDate = styled.p`
  text-align: left;
  font-size: 14px;
  color: var(--color-grey39);
`;

const UserData = styled.td`
  width: 220px;
`;

const DataContact = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ButtonContainer = styled.div`
  padding-right: 30px;
`;

const DeleteIcon = styled.button`
  width: 25px;
  height: 25px;
`;

export {
  UserDataName,
  Image,
  UserInfo,
  UserName,
  UserId,
  UserDate,
  UserData,
  DataContact,
  ButtonContainer,
  DeleteIcon,
};
