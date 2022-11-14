import React, { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";

import {
  Table,
  Row,
  TableTitle,
  CheckboxContainer,
  Checkbox,
  Button,
} from "../../components/TableBlocks/TableBlocks";

import {
  RoomsContainer,
  NameContainer,
  Image,
  NameInfo,
  Id,
  Number,
  RoomData,
  Info,
  Status,
} from "./Rooms_sc";

import rooms from "../../db/rooms.json";

console.log(rooms);

const Rooms = () => {
  return (
    <>
      {/* <RoomsContainer> */}
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
            {rooms.map((room) => (
              <Row key={room.id}>
                <td style={{paddingLeft: '10px'}}>
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
                  <Status $typeStatus={room.status}>
                    {room.status ? "Available" : "Booked"}
                  </Status>
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
      {/* </RoomsContainer> */}
    </>
  );
};

export default Rooms;
