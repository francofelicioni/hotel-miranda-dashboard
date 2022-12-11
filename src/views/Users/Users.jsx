import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  fetchUsers,
  selectUsers,
  selectState,
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

import Spinner from "../../components/Blocks/Spinner";

import UsersRow from "../../components/Blocks/UsersRow";
import Navigation from "../../components/Navigation/Navigation";

const Users = () => {
  const dispatch = useDispatch();
  const usersResult = useSelector(selectUsers);
  const appState = useSelector(selectState);

  const [userStatus, setUserStatus] = useState("");
  const [lengthFromRedux, setLengthFromRedux] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);

  //Navigation
  const [itemsToShow, setItemsToShow] = useState(5);
  const [pagesLength, setPagesLength] = useState(1);
  const [initialIndex, setInitialIndex] = useState(5);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const setAllUsers = () => {
    setLengthFromRedux(true);
    dispatch(fetchUsers());
  };

  useEffect(() => {
    const usersToFilter = usersResult;
    const usersFiltered = usersToFilter.filter(
      (user) => user.status === userStatus
    );
    setFilteredUsers(usersFiltered);
  }, [userStatus, usersResult]);

  const usersSwitch = () => {
    if (lengthFromRedux) {
      return usersResult;
    } else {
      return filteredUsers;
    }
  };

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
              {usersSwitch().map((user, index) =>
                index < initialIndex && index >= (initialIndex - itemsToShow) ? (
                  <UsersRow key={user.id} user={user} />
                ) : (
                  false
                )
              )}
            </tbody>
          )}
        </Table>

        <Navigation
          info={usersSwitch()}
          pagesLength={pagesLength}
          setPagesLength={setPagesLength}
          initialIndex={initialIndex}
          setInitialIndex={setInitialIndex}
        />
      </MainContainer>
    </>
  );
};

export default Users;
