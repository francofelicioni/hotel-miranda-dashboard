import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchRooms,
  selectRooms,
  roomsStatus,
} from "../../features/rooms/roomsSlice";

import MainContainer from "../../components/MainContainer/MainContainer";

import { Table, TableTitle } from "../../components/Blocks/TableBlocks";

import {
  ListButtonsContainer,
  Selectors,
  Selector,
} from "../../components/Blocks/FilterButtons";

import RoomsButtons from "../../components/Blocks/RoomsButtons";

import RoomsRow from "../../components/Blocks/RoomsRow";
import Spinner from "../../components/Blocks/Spinner";

const Rooms = () => {
  const dispatch = useDispatch();
  const roomsResult = useSelector(selectRooms);
  const appState = useSelector(roomsStatus);

  const [roomStatus, setRoomStatus] = useState("");
  const [lengthFromRedux, setLengthFromRedux] = useState(true);
  const [roomsFiltered, setRoomsFiltered] = useState([]);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const setAllRooms = () => {
    setLengthFromRedux(true);
    dispatch(fetchRooms());
  };

  console.log("ROOMS RESULT", roomsResult);

  useEffect(() => {
    const roomsToFilter = roomsResult;
    const roomsFiltered = roomsToFilter.filter(
      (room) => room.status === roomStatus
    );
    setRoomsFiltered(roomsFiltered);
  }, [roomStatus, roomsResult]);

  const roomsSwitch = () => {
    if (lengthFromRedux) {
      return roomsResult;
    } else {
      return roomsFiltered;
    }
  };

  return (
    <>
      <MainContainer>
        <ListButtonsContainer>
          <Selectors>
            <Selector
              onClick={() => {
                setAllRooms();
              }}
            >
              All Rooms
            </Selector>
            <Selector
              onClick={() => {
                setRoomStatus(true);
                setLengthFromRedux(false);
              }}
            >
              Available
            </Selector>
            <Selector
              onClick={() => {
                setRoomStatus(false);
                setLengthFromRedux(false);
              }}
            >
              Booked
            </Selector>
          </Selectors>
          <RoomsButtons />
        </ListButtonsContainer>
        <Table>
          <thead>
            <tr>
              <TableTitle> Room Name </TableTitle>
              <TableTitle> Room Type </TableTitle>
              <TableTitle> Amenities </TableTitle>
              <TableTitle> Price </TableTitle>
              <TableTitle> Offer Price </TableTitle>
              <TableTitle> Status </TableTitle>
            </tr>
          </thead>

          {appState === "pending" && (
            <tbody>
              <Spinner />
            </tbody>
          )}

          {appState === "fulfilled" && (
            <tbody>
              {roomsSwitch().map((room) => (
                <RoomsRow key={room.id} room={room} />
              ))}
            </tbody>
          )}
        </Table>
      </MainContainer>
    </>
  );
};

export default Rooms;
