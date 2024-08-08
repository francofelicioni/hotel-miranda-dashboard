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

import { DeleteButton } from "./Button";
import { Status } from "./Status";
import { Row } from "./TableBlocks";
import { BsThreeDotsVertical } from "react-icons/bs";

const RoomsRow = ({ room }) => {
  return (
    <>
      <Row key={room._id}>
        <NameContainer>
          <Image src={room.images} />
          <NameInfo>
            <Id># {room._id}</Id>
            <Number>Room: {room.room_number}</Number>
          </NameInfo>
        </NameContainer>

        <RoomData>
          <Info style={{ fontWeight: "600" }}> {room.bed_type} </Info>
        </RoomData>

        <RoomData>
          <Info>
            {room.facilities.split()}
            {/* {room.facilities.map((facility, index) => (
              <span key={index}> {facility}, </span>
            ))} */}
          </Info>
        </RoomData>

        <RoomData>
          <Info> € {room.price} /night </Info>
        </RoomData>

        <RoomData>
          {room.offer ? (
            <Info>
              €{" "}
              {(room.price - room.price * (room.offer_price / 100)).toFixed(2)}
               /nigh
            </Info>
          ) : (
            <Info>Not in discount</Info>
          )}
        </RoomData>
        <td>
          <Status type="rooms" typeStatus={room.status}>
            {room.status ? "Available" : "Booked"}
          </Status>
        </td>
        <td>
          <DeleteButton>
            <BsThreeDotsVertical />
          </DeleteButton>
        </td>
      </Row>
    </>
  );
};

export default RoomsRow;
