import React, { useEffect } from "react";
import MainContainer from "../../components/MainContainer/MainContainer";

import { useDispatch, useSelector } from "react-redux";
import { fetchBookings, selectBookings } from "../../features/bookings/bookingsSlice";

import {
  Table,
  TableTitle,
  Checkbox,
} from "../../components/Blocks/TableBlocks";

import ViewsNavigation from "../../components/Blocks/ViewsNavigation";
import BookingsRow from "../../components/Blocks/BookingsRow";

const Bookings = () => {
  const dispatch = useDispatch();
  const bookingsResult = useSelector(selectBookings);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  return (
    <MainContainer>
      <ViewsNavigation
        n1="All Guest"
        n2="Pending"
        n3="Booked"
        b1="1 November 2020 - 30 "
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
          {bookingsResult.map((guest) => (
            <BookingsRow key={guest.id} guest={guest} />
          ))}
        </tbody>
      </Table>
    </MainContainer>
  );
};

export default Bookings;
