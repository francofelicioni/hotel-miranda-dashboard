import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms, selectRooms } from "../../features/rooms/roomsSlice";
// import rooms from "../../db/rooms.json";

import MainContainer from "../../components/MainContainer/MainContainer";

import { BsThreeDotsVertical } from "react-icons/bs";

import { Status } from "../../components/Blocks/Status";
import { Button } from "../../components/Blocks/Button";
import {
  Table,
  Row,
  TableTitle,
  CheckboxContainer,
  Checkbox,
} from "../../components/Blocks/TableBlocks";

import {
  NameContainer,
  Image,
  NameInfo,
  Id,
  Number,
  RoomData,
  Info,
} from "./Rooms_sc";
import ViewsNavigation from "../../components/Blocks/ViewsNavigation";

const Rooms = () => {
  const dispatch = useDispatch();
  const roomsResult = useSelector(selectRooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  return (
    <>
      <MainContainer>
      <ViewsNavigation a='All Rooms' b='Active Employee' c='Inactive Employee' d='+ New Room' e='Newest'/>
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
              <Row key={room.id}>
                <td style={{ paddingLeft: "10px" }}>
                  <CheckboxContainer>
                    <Checkbox type="checkbox"></Checkbox>
                  </CheckboxContainer>
                </td>

                <td>
                  <NameContainer>
                    <Image src={`/rooms/${room.id + 1}.jpg`} />
                    <NameInfo>
                      <Id># {room.id}</Id>
                      <Number>Room: {room.room_number}</Number>
                    </NameInfo>
                  </NameContainer>
                </td>

                <td>
                  <RoomData>
                    <Info style={{ fontWeight: "600" }}> {room.bed_type} </Info>
                  </RoomData>
                </td>

                <td>
                  <RoomData>
                    <Info>
                      {room.amenities.map((amenity, index) => (
                        <span key={index}> {amenity}, </span>
                      ))}
                    </Info>
                  </RoomData>
                </td>

                <td>
                  <RoomData>
                    <Info> € {room.price.toString()} /nigth </Info>
                  </RoomData>
                </td>

                <td>
                  <RoomData>
                    <Info> € {room.offer.toString()} /nigth </Info>
                  </RoomData>
                </td>

                <td>
                  <Status $type="rooms" $typeStatus={room.status}>
                    {room.status ? "Available" : "Booked"}
                  </Status>
                </td>

                <td>
                  <RoomData>
                    <Button $type="delete">
                      <BsThreeDotsVertical />
                    </Button>
                  </RoomData>
                </td>
              </Row>
            ))}
          </tbody>
        </Table>
      </MainContainer>
    </>
  );
};

export default Rooms;
