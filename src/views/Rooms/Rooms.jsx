import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms, selectRooms } from "../../features/rooms/roomsSlice";

import MainContainer from "../../components/MainContainer/MainContainer";

import {
  Table,
  Row,
  TableTitle,
  Checkbox,
} from "../../components/Blocks/TableBlocks";

import ViewsNavigation from "../../components/Blocks/ViewsNavigation";
import RoomsRow from "../../components/Blocks/RoomsRow";

const Rooms = () => {
  const dispatch = useDispatch();
  const roomsResult = useSelector(selectRooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  return (
    <>
      <MainContainer>
        <ViewsNavigation
          a="All Rooms"
          b="Active Employee"
          c="Inactive Employee"
          d="+ New Room"
          e="Newest"
        />
        <Table>
          <thead>
            <tr>
              <TableTitle style={{ paddingLeft: "10px" }}>
                <Checkbox type="checkbox"></Checkbox>
              </TableTitle>
              <TableTitle> Room Name </TableTitle>
              <TableTitle> Room Type </TableTitle>
              <TableTitle> Amenities </TableTitle>
              <TableTitle> Price </TableTitle>
              <TableTitle> Offer Price </TableTitle>
              <TableTitle> Status </TableTitle>
            </tr>
          </thead>

          <tbody>
            {roomsResult.map((room) => (
              <RoomsRow key={room.id} room={room} />
            ))}
          </tbody>
        </Table>
      </MainContainer>
    </>
  );
};

export default Rooms;
