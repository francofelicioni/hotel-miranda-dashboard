import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, selectUsers } from "../../features/users/usersSlice";

import MainContainer from "../../components/MainContainer/MainContainer";

import {
  Table,
  TableTitle,
  Checkbox,
} from "../../components/Blocks/TableBlocks";

import ViewsNavigation from "../../components/Blocks/ViewsNavigation";
import UsersRow from "../../components/Blocks/UsersRow";

const Users = () => {
  const dispatch = useDispatch();
  const usersResult = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <MainContainer>
        <ViewsNavigation
          n1="All Users"
          n2="Active Users"
          n3="Inactive Users"
          b1="+ New User"
          b2="Newest"
        />
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
            {usersResult.map((user) => (
              <UsersRow key={user.id} user={user} />
            ))}
          </tbody>
        </Table>
      </MainContainer>
    </>
  );
};

export default Users;
