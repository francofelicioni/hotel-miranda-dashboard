import React from "react";

import users from "../../db/users.json";

import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";

import {
  Table,
  Row,
  TableTitle,
  CheckboxContainer,
  Checkbox,
} from "../../components/Blocks/TableBlocks";

import {
  UserDataName,
  UserInfo,
  UserName,
  UserId,
  UserDate,
  UserData,
  DataContact,
} from "./Users_sc";

import { Status } from '../../components/Blocks/Status';
import { Button } from "../../components/Blocks/Button";

const Users = () => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <TableTitle style={{ paddingLeft: "10px" }}>
              <Checkbox type="checkbox"></Checkbox>
            </TableTitle>
            <TableTitle>Name</TableTitle>
            <TableTitle>Job Desk</TableTitle>
            <TableTitle>Contact</TableTitle>
            <TableTitle>Status</TableTitle>
            <TableTitle></TableTitle>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <Row>
              <td style={{ paddingLeft: "10px" }}>
                <CheckboxContainer>
                  <Checkbox type="checkbox" />
                </CheckboxContainer>
              </td>

              <td>
                <UserDataName>
                  <img
                    src={user.image}
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  />
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
                <UserData style={{maxWidth:'100px'}}>
                  <Status $type='users' $typeStatus={user.status}>
                    {user.status ? "ACTIVE" : "INACTIVE"}
                  </Status>
                </UserData>
              </td>

              <td>
                <UserData style={{maxWidth:'10px', marginRight: '10px'}} className="userData-container__button">
                  <Button $type='delete' style={{margin: '0'}}>
                    <BsThreeDotsVertical className="delete_icon" />
                  </Button>
                </UserData>
              </td>
            </Row>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
