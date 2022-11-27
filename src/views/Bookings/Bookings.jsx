import React, { useEffect } from "react";
import MainContainer from "../../components/MainContainer/MainContainer";

import { useDispatch } from "react-redux";
import { fetchBookings } from "../../features/bookings/bookingsSlice";

import guest from "../../db/guests.json";

import {
  Table,
  TableTitle,
  Checkbox,
} from "../../components/Blocks/TableBlocks";

import ViewsNavigation from "../../components/Blocks/ViewsNavigation";
import BookingsRow from "../../components/Blocks/BookingsRow";

const Bookings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  return (
    <MainContainer>
      <ViewsNavigation
        a="All Guest"
        b="Pending"
        c="Booked"
        d="1 November 2020 - 30 "
        e="Newest"
      ></ViewsNavigation>
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
            <BookingsRow key={guest.id} guest={guest} />
          ))}
        </tbody>
      </Table>
    </MainContainer>
  );
};

export default Bookings;
