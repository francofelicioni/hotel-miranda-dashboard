import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchBookings,
  selectBookings,
  bookingsStatus,
} from "../../features/bookings/bookingsSlice";

import MainContainer from "../../components/MainContainer/MainContainer";

import {
  ListButtonsContainer,
  Selectors,
  Selector,
} from '../../components/Blocks/FilterButtons'

import BookingButtons from "../../components/Blocks/BookingButtons";

import { Table, TableTitle } from "../../components/Blocks/TableBlocks";

import Spinner from "../../components/Blocks/Spinner";

import BookingsRow from "../../components/Blocks/BookingsRow";

const Bookings = () => {
  const dispatch = useDispatch();
  const bookingsResult = useSelector(selectBookings);
  const appState = useSelector(bookingsStatus);

  const [bookingStatus, setBookingStatus] = useState("");
  const [lengthFromRedux, setLengthFromRedux] = useState(true);
  const [bookingsFiltered, setBookingsFiltered] = useState([]);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const setAllBookings = () => {
      setLengthFromRedux(true);
      dispatch(fetchBookings())
  }

  useEffect(()=> {
    const bookingsToFilter = bookingsResult;
    const bookingsFiltered = bookingsToFilter.filter((booking) => booking.state === bookingStatus)
    setBookingsFiltered(bookingsFiltered)
  }, [bookingStatus, bookingsResult]);

  const bookingsSwitch = () => {
    if (lengthFromRedux) {
      return bookingsResult;
    } else {
      return bookingsFiltered;
    }
  }

  return (
    <MainContainer>
      <ListButtonsContainer>
        <Selectors>
          <Selector
            onClick={() => {
              setAllBookings();
            }}
          >
            All Bookings
          </Selector>
          <Selector
            onClick={() => {
              setBookingStatus('Check In');
              setLengthFromRedux(false);
            }}
          >
            Check In
          </Selector>
          <Selector
            onClick={() => {
              setBookingStatus('Check Out');
              setLengthFromRedux(false);;
            }}
          >
            Check Out
          </Selector>
          <Selector
            onClick={() => {
              setBookingStatus('In Progress');
              setLengthFromRedux(false);
            }}
          >
            In Progress
          </Selector>
        </Selectors>
        <BookingButtons select="01/11/2022 - 30/11/2022" />
      </ListButtonsContainer>
      <Table>
        <thead>
          <tr>
            <TableTitle>Guest</TableTitle>
            <TableTitle>Order Date</TableTitle>
            <TableTitle>Check In</TableTitle>
            <TableTitle>Check Out</TableTitle>
            <TableTitle>Special Request</TableTitle>
            <TableTitle>Room Type</TableTitle>
            <TableTitle>Status</TableTitle>
          </tr>
        </thead>

        {appState === "pending" && (
          <tbody>
            <Spinner />
          </tbody>
        )}

        {appState === "fulfilled" && (
          <tbody>
            {bookingsSwitch().map((guest) => (
              <BookingsRow key={guest.id} guest={guest} />
            ))}
          </tbody>
        )}
      </Table>
    </MainContainer>
  );
};

export default Bookings;
