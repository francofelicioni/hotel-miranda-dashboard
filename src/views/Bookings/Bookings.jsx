import React from "react";

import guest from "../../db/guests.json";

import { BsThreeDotsVertical } from "react-icons/bs";

import {
  BookingContainer,
  Table,
  TableTitle,
  Row,
  GuestContainer,
  CheckboxContainer,
  Img,
  Name,
  Id,
  DataContainer,
  Text,
  Button,
  NotesButton,
  Status,
} from './Bookings_sc';

const Bookings = () => {
  return (
    <BookingContainer>
      <Table>
        <tr>
          <TableTitle></TableTitle>
          <TableTitle>Guest</TableTitle>
          <TableTitle>Order Date</TableTitle>
          <TableTitle>Check In</TableTitle>
          <TableTitle>Check Out</TableTitle>
          <TableTitle>Special Request</TableTitle>
          <TableTitle>Room Type</TableTitle>
          <TableTitle>Status</TableTitle>
        </tr>
        {guest.map((guest) => (
          <Row>
            <CheckboxContainer>
              <input className="checkbox" type="checkbox"></input>
            </CheckboxContainer>
            <td>
              <GuestContainer>
                <Img src={guest.image} alt="Guest Image" />
                <div>
                  <Name>{guest.full_name}</Name>
                  <Id># {guest.id}</Id>
                </div>
              </GuestContainer>
            </td>
            <DataContainer>
              <Text>{guest.order_date}</Text>
            </DataContainer>
            <DataContainer>
              <Text>{guest.check_in}</Text>
            </DataContainer>
            <DataContainer>
              <Text>{guest.check_out}</Text>
            </DataContainer>
            <td>
              <NotesButton> {guest.special_request} </NotesButton>
            </td>
            <DataContainer>
              <Text>
                {guest.room_info.type} - {guest.room_info.number}
              </Text>
            </DataContainer>
            <td>
              <Status> {guest.state}</Status>
            </td>
            <DataContainer>
              <Button>
                <BsThreeDotsVertical />
              </Button>
            </DataContainer>
          </Row>
        ))}
      </Table>
    </BookingContainer>
  );
};

export default Bookings;
