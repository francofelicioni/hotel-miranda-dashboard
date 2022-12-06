import React from "react";

import {
  Id,
  Image,
  Info,
  NameContainer,
  NameInfo,
  Number,
  RoomData,
} from "../../views/Rooms/Rooms_sc";

import { Button } from "./Button";
import { Status } from "./Status";
import { Row } from "./TableBlocks";
import { BsThreeDotsVertical } from "react-icons/bs";

const RoomsRow = ({ room }) => {
  return (
    <>
      <Row key={room.id}>
        <NameContainer>
          <Image src={`/rooms/${room.id + 1}.jpg`} />
          <NameInfo>
            <Id># {room.id}</Id>
            <Number>Room: {room.room_number}</Number>
          </NameInfo>
        </NameContainer>

        <RoomData>
          <Info style={{ fontWeight: "600" }}> {room.bed_type} </Info>
        </RoomData>

        <RoomData>
          <Info>
            {room.amenities.map((amenity, index) => (
              <span key={index}> {amenity}, </span>
            ))}
          </Info>
        </RoomData>

        <RoomData>
          <Info> € {room.price.toString()} /nigth </Info>
        </RoomData>

        <RoomData>
          <Info> € {room.offer.toString()} /nigth </Info>
        </RoomData>
        <td>
          <Status $type="rooms" $typeStatus={room.status}>
            {room.status ? "Available" : "Booked"}
          </Status>
        </td>
        <td>
          <Button $type="delete">
            <BsThreeDotsVertical />
          </Button>
        </td>
      </Row>
    </>
  );
};

export default RoomsRow;
