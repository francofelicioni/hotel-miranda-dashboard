import React from "react";

import guest from "../../db/guests.json";

import { BsThreeDotsVertical } from "react-icons/bs";

import Swal from "sweetalert2";

import {
  Table,
  Row,
  TableTitle,
  CheckboxContainer,
  Checkbox,
  Button,
} from "../../components/TableBlocks/TableBlocks";

import {
  GuestContainer,
  Img,
  Name,
  Id,
  DataContainer,
  Text,
  NotesButton,
  Status,
} from "./Bookings_sc";

const Bookings = () => {

  const handleClick = (special_request) => {
    if (special_request) {
      Swal.fire({
        title: `${special_request}`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    } 
  }

  console.log(guest);
  return (
    <Table>
      <thead>
        <tr>
          <TableTitle style={{ paddingLeft: "10px" }}>
            <Checkbox type="checkbox" />
          </TableTitle>
          <TableTitle>Guest</TableTitle>
          <TableTitle>Order Date</TableTitle>
          <TableTitle>Check In</TableTitle>
          <TableTitle>Check Out</TableTitle>
          <TableTitle>Special Request</TableTitle>
          <TableTitle>Room Type</TableTitle>
          <TableTitle>Status</TableTitle>
        </tr>
      </thead>

      <tbody>
        {guest.map((guest) => (
          <Row key={guest.id}>
            <td style={{ paddingLeft: "10px" }}>
              <CheckboxContainer className="checkBocContainer">
                <Checkbox type="checkbox" />
              </CheckboxContainer>
            </td>
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
              <NotesButton $special_request={guest.special_request} onClick={()=>handleClick(guest.special_request)}> View Notes </NotesButton>
            </td>
            <DataContainer>
              <Text>
                {guest.room_info.type} - {guest.room_info.number}
              </Text>
            </DataContainer>
            <td>
              <Status $typeStatus={guest.state}> {guest.state}</Status>
            </td>
            <DataContainer>
              <Button>
                <BsThreeDotsVertical />
              </Button>
            </DataContainer>
          </Row>
        ))}
      </tbody>
    </Table>
  );
};

export default Bookings;
