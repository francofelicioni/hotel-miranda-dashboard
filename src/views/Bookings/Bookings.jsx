import React, { useEffect } from "react";
import MainContainer from "../../components/MainContainer/MainContainer";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchBookings,
  selectBookings,
} from "../../features/bookings/bookingsSlice";

import guest from "../../db/guests.json";

import Swal from "sweetalert2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "../../components/Blocks/Button";
import { Status } from "../../components/Blocks/Status";
import {
  Table,
  Row,
  TableTitle,
  CheckboxContainer,
  Checkbox,
} from "../../components/Blocks/TableBlocks";
import {
  GuestContainer,
  Img,
  Name,
  Id,
  DataContainer,
  Text,
} from "./Bookings_sc";

const Bookings = () => {
  const dispatch = useDispatch();
  // const bookingsResult = useSelector(selectBookings);
  // console.log("BL", bookingsList);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const handleClick = (special_request) => {
    if (special_request) {
      Swal.fire({
        title: `${special_request}`,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };

  return (
    <MainContainer>
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
                <Button
                  $type="notes"
                  $special_request={guest.special_request}
                  onClick={() => handleClick(guest.special_request)}
                >
                  View Notes
                </Button>
              </td>
              <DataContainer>
                <Text style={{ fontWeight: 600 }}>
                  {guest.room_info.type} - {guest.room_info.number}
                </Text>
              </DataContainer>
              <td>
                <Status $type="bookings" $typeStatus={guest.state}>
                  {" "}
                  {guest.state}
                </Status>
              </td>
              <DataContainer>
                <Button $type="delete">
                  <BsThreeDotsVertical />
                </Button>
              </DataContainer>
            </Row>
          ))}
        </tbody>
      </Table>
    </MainContainer>
  );
};

export default Bookings;
