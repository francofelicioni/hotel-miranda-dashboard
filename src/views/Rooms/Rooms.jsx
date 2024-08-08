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
import Navigation from "../../components/Navigation/Navigation";

const Rooms = () => {
  const dispatch = useDispatch();
  const roomsResult = useSelector(selectRooms);
  const appState = useSelector(roomsStatus);

  const [roomStatus, setRoomStatus] = useState("");
  const [lengthFromRedux, setLengthFromRedux] = useState(true);
  const [roomsFiltered, setRoomsFiltered] = useState([]);

  //Navigation
  const [itemsToShow, setItemsToShow] = useState(5);
  const [pagesLength, setPagesLength] = useState(1);
  const [initialIndex, setInitialIndex] = useState(5);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const setAllRooms = () => {
    setLengthFromRedux(true);
    dispatch(fetchRooms());
  };

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

  console.log('RR', roomsResult)
  console.log('RS', roomsSwitch())

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
              <TableTitle> Facilities </TableTitle>
              <TableTitle> Price </TableTitle>
              <TableTitle> Offer Price </TableTitle>
              <TableTitle> Status </TableTitle>
            </tr>
          </thead>

          {appState === "pending" && (
            <tbody>
              <tr>
                <td>
                  <Spinner />
                </td>
              </tr>
            </tbody>
          )}

          {appState === "fulfilled" && (
            <tbody>
              {roomsSwitch().map((room, index) =>
                index < initialIndex && index >= initialIndex - itemsToShow ? (
                  <RoomsRow key={room._id} room={room} />
                ) : (
                  false
                )
              )}
            </tbody>
          )}
        </Table>

        <Navigation
          info={roomsSwitch()}
          pagesLength={pagesLength}
          setPagesLength={setPagesLength}
          initialIndex={initialIndex}
          setInitialIndex={setInitialIndex}
        />
      </MainContainer>
    </>
  );
};

export default Rooms;
