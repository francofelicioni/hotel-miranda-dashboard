import React from "react";
import { Link } from "react-router-dom";

import users from "../../db/users.json";

import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";

import {
  UsersContainer,
  Table,
  HeaderTitle,
  Row,
  UserData,
  UserDataName,
  CheckboxContainer,
  UserStatus,
} from "./Users_sc";

const Users = ({}) => {
  return (
    <>
      <UsersContainer>
        {/* <div>Users</div>
        <Link to={`/user/user4`}> USER 4</Link> */}

        <Table>
          <thead>
            <tr>
              <HeaderTitle style={{ width: "100px" }}>
                <input className="checkbox" type="checkbox"></input>
              </HeaderTitle>
              <HeaderTitle>Name</HeaderTitle>
              <HeaderTitle>Job Desk</HeaderTitle>
              <HeaderTitle>Contact</HeaderTitle>
              <HeaderTitle>Status</HeaderTitle>
              <HeaderTitle></HeaderTitle>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <Row>
                <td>
                  <CheckboxContainer>
                    <input className="checkbox" type="checkbox"></input>
                  </CheckboxContainer>
                </td>

                <td>
                  <UserDataName>
                    <img
                      src={user.image}
                      alt=""
                      style={{ width: "80px", height: "80px" }}
                    />
                    <div className="user__info">
                      <p className="user__info-name">{user.full_name}</p>
                      <p className="user__info-id"># {user.id}</p>
                      <p className="user__info-date">
                        Joined on {user.start_date}
                      </p>
                    </div>
                  </UserDataName>
                </td>

                <td>
                  <UserData>
                    <p className="data__description">{user.description}</p>
                  </UserData>
                </td>

                <td>
                  <UserData style={{ width: "240px" }}>
                    <p className="data__contact">
                      <HiOutlinePhone />
                      <span>{user.contact}</span>
                    </p>
                    <p className="data__contact">
                      <HiOutlineMail />
                      <span>{user.email}</span>
                    </p>
                  </UserData>
                </td>

                <td>
                  <UserData>
                    <UserStatus status={users.state ? "#5AD07A" : "#E23428"}>
                      {user.status ? "ACTIVE" : "INACTIVE"}
                    </UserStatus>
                  </UserData>
                </td>

                <td>
                  <UserData className="userData-container__button">
                    <button>
                      <BsThreeDotsVertical className="delete_icon" />
                    </button>
                  </UserData>
                </td>
              </Row>
            ))}
          </tbody>
        </Table>
      </UsersContainer>
    </>
  );
};

export default Users;
