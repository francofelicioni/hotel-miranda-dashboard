import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { DataContact, Image, UserData, UserDataName, UserDate, UserId, UserInfo, UserName } from "../../views/Users/Users_sc";
import { Button } from "./Button";
import { Status } from "./Status";
import { Checkbox, CheckboxContainer, Row } from "./TableBlocks";

const UsersRow = ({user}) => {
  return (
    <Row key={user.id}>
      <td style={{ paddingLeft: "10px" }}>
        <CheckboxContainer>
          <Checkbox type="checkbox" />
        </CheckboxContainer>
      </td>

      <td>
        <UserDataName>
          <Image src={user.image} />
          <UserInfo>
            <UserName>{user.full_name} </UserName>
            <UserId># {user.id}</UserId>
            <UserDate>Joined on {user.start_date}</UserDate>
          </UserInfo>
        </UserDataName>
      </td>

      <td>
        <UserData>
          <p className="data__description">{user.description}</p>
        </UserData>
      </td>

      <td>
        <UserData style={{ width: "240px" }}>
          <DataContact>
            <HiOutlinePhone />
            <span>{user.contact}</span>
          </DataContact>
          <DataContact>
            <HiOutlineMail />
            <span>{user.email}</span>
          </DataContact>
        </UserData>
      </td>

      <td>
        <UserData style={{ maxWidth: "100px" }}>
          <Status $type="users" $typeStatus={user.status}>
            {user.status ? "ACTIVE" : "INACTIVE"}
          </Status>
        </UserData>
      </td>

      <td>
        <UserData
          style={{ maxWidth: "10px", marginRight: "10px" }}
          className="userData-container__button"
        >
          <Button $type="delete" style={{ margin: "0" }}>
            <BsThreeDotsVertical className="delete_icon" />
          </Button>
        </UserData>
      </td>
    </Row>
  );
};

export default UsersRow;
