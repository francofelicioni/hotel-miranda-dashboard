import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  selectState,
  selectUsers,
} from "../../features/users/usersSlice";

import MainContainer from "../../components/MainContainer/MainContainer";

import {
  ListButtonsContainer,
  Selectors,
  Selector,
} from "../../components/Blocks/FilterButtons";

import UsersButtons from "../../components/Blocks/UsersButtons";

import {
  Table,
  TableTitle,
  Checkbox,
} from "../../components/Blocks/TableBlocks";

import UsersRow from "../../components/Blocks/UsersRow";
import Spinner from "../../components/Blocks/Spinner";

const Users = () => {
  const dispatch = useDispatch();
  const usersResult = useSelector(selectUsers);
  const appState = useSelector(selectState);

  console.log('UR',usersResult)

  const [userStatus, setUserStatus] = useState("");
  const [lengthFromRedux, setLengthFromRedux] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    const usersToFilter = usersResult;
    const usersFiltered = usersToFilter.filter(
      (user) => user.status === userStatus
    );
    setFilteredUsers(usersFiltered);
  }, [userStatus, usersResult]);

  const setAllUsers = () => {
    setLengthFromRedux(true);
    dispatch(fetchUsers());
  };
  
  const usersSwitch = () => {
    if (lengthFromRedux) {
      return usersResult;
    } else {
      return filteredUsers;
    }
  }

  return (
    <>
      <MainContainer>
        <ListButtonsContainer>
          <Selectors>
            <Selector
              onClick={() => {
                setAllUsers();
              }}
            >
              {" "}
              All Users{" "}
            </Selector>
            <Selector
              onClick={() => {
                setUserStatus(true);
                setLengthFromRedux(false);
              }}
            >
              Active Users
            </Selector>
            <Selector
              onClick={() => {
                setUserStatus(false);
                setLengthFromRedux(false);
              }}
            >
              Inactive Users
            </Selector>
          </Selectors>
          <UsersButtons />
        </ListButtonsContainer>

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

          {appState === "pending" && (
            <tbody>
              <Spinner />
            </tbody>
          )}

          {appState === "fulfilled" && (
            <tbody>
              {usersSwitch().map((user) => (
                <UsersRow key={user.id} user={user} />
              ))}
            </tbody>
          )}
        </Table>
      </MainContainer>
    </>
  );
};

export default Users;
