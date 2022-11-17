import styled, { css } from "styled-components";

const UserDataName = styled.div`
  display: flex;
  align-items: center;
`;

const UserInfo = styled.div`
  padding: 0 1rem;
`;

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

const DeleteIcon = styled.button`
  width: 25px;
  height: 25px;
`;

const CheckboxContainer = styled.div`
  width: 20px;
`;

const Status = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: left;

  ${(props) => {
    switch (props.$typeStatus) {
      case true:
        return css`
          color: var(--color-greenLight);
          font-weight: 600;
        `;
      case false:
        return css`
          color: var(--color-red);
          font-weight: 600;
        `;
      default:
        return css`
          color: var(--color-black);
          font-weight: 600;
        `;
    }
  }}
`;

export {
  UserDataName,
  UserInfo,
  UserName,
  UserId,
  UserDate,
  UserData,
  DataContact,
  ButtonContainer,
  // Button,
  DeleteIcon,
  CheckboxContainer,
  Status,
};
