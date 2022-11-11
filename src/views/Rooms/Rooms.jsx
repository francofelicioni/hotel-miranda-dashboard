import React, { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";

import {
  RoomsContainer,
  Table,
  TableTitle,
  Row,
  CheckboxContainer,
  NameContainer,
  Image,
  NameInfo,
  Id,
  Number,
  RoomData,
  Info,
  RoomStatus,
  Button,
} from "./Rooms_sc";

import rooms from "../../db/rooms.json";

console.log(rooms);

const Rooms = () => {
  const [bed, setBed] = useState("");

  const setBedType = (room) => {
    console.log("room que llega", room.bed_type);
    if (room.bed_type === "suite") {
      setBed("Suite");
      return bed;
    } else if (room.bed_type === "double") {
      setBed("Double Bed");
      return bed;
    } else if (room.bed_type === "single") {
      setBed("Single Bed");
      return bed;
    } else if (room.bed_type === "double_superior") {
      setBed("Double Superior");
      return bed;
    }
  };

  return (
    <>
      <RoomsContainer>
        <Table>
          <thead>
            <tr>
              <TableTitle><input className='checkbox' type="checkbox"></input></TableTitle>
              <TableTitle> Room Name </TableTitle>
              <TableTitle> Room Type </TableTitle>
              <TableTitle> Amenities </TableTitle>
              <TableTitle> Price </TableTitle>
              <TableTitle> Offer Price </TableTitle>
              <TableTitle> Status </TableTitle>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room) => (
              <Row key={room.id}>
                <td>
                  <CheckboxContainer>
                    <input className="checkbox" type="checkbox"></input>
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
                    <Info> {room.bed_type}</Info>
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
                  <RoomStatus>
                    {room.status_available ? "Available" : "Booked"}
                  </RoomStatus>
                </td>
                <RoomData>
                  <Button>
                    {" "}
                    <BsThreeDotsVertical />{" "}
                  </Button>
                </RoomData>
              </Row>
            ))}
          </tbody>
        </Table>
      </RoomsContainer>
    </>
  );
};

export default Rooms;
