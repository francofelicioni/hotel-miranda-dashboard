import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import {
  DataContact,
  Image,
  UserData,
  UserDataName,
  UserDate,
  UserId,
  UserInfo,
  UserName,
} from "../../views/Users/Users_sc";
import { Button } from "./Button";
import { Status } from "./Status";
import { Checkbox, CheckboxContainer, Row } from "./TableBlocks";

type UserObject = {
  user: UserRowInt;
}

interface UserRowInt {
  id: number;
  image: string;
  full_name: string;
  email: string;
  contact: string;
  description: string;
  start_date: string;
  status: boolean;
}


const UsersRow = ({ user }: UserObject): JSX.Element => {
  return (
    <Row key={user.id}>
      <UserDataName>
        <Image src={user.image} />
        <UserInfo>
          <UserName>{user.full_name} </UserName>
          <UserId># {user.id}</UserId>
          <UserDate>Joined on {user.start_date}</UserDate>
        </UserInfo>
      </UserDataName>

      <UserData>
        <p className="data__description">{user.description}</p>
      </UserData>

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

      <UserData style={{ maxWidth: "100px" }}>
        <Status $type="users" $typeStatus={user.status}>
          {user.status ? "ACTIVE" : "INACTIVE"}
        </Status>
      </UserData>

      <UserData
        style={{ width: "30px"}}
      >
        {/* <Button $type="delete" style={{ margin: "0" }}> */}
          <BsThreeDotsVertical className="delete_icon" />
        {/* </Button> */}
      </UserData>
    </Row>
  );
};

export default UsersRow;
