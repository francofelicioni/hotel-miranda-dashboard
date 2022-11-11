import styled from "styled-components";

const UsersContainer = styled.div`
  position: absolute;
  width: 80%;
  right: 0;
  bottom: -750px;
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

const HeaderTitle = styled.th`
  font-weight: 600;
  text-align:left;
`;

const Row = styled.tr`
  border-bottom: 1px solid var(--color-greyD4);
  border-top: 1px solid var(--color-greyD4);
  justify-content: center;
  align-items: center;
`;

const UserDataName = styled.div`
  display: flex;

  .user__info {
    padding: 0 1rem;

    &-name {
      font-size: 1rem;
      color: #393939;
      opacity: 1;
    }

    &-id {
      text-align: left;
      font-size: 14px;
      color: #799283;
    }
  }
`;

const UserData = styled.div`
  width: 200px;

  .data__contact {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .userData-container__button {
    padding-right: 30px;
  }

  button{
        background-color: transparent;
        border: none;

        .delete_icon{
            width: 25px;
            height: 25px;
        }
    }
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
  HeaderTitle,
  Row,
  UserDataName,
  UserData,
  CheckboxContainer,
  UserStatus,
};
