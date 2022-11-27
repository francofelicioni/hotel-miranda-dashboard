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
import { Checkbox, CheckboxContainer, Row } from "./TableBlocks";
import { BsThreeDotsVertical } from "react-icons/bs";

const RoomsRow = ({ room }) => {
  return (
    <>
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
    </>
  );
};

export default RoomsRow;
