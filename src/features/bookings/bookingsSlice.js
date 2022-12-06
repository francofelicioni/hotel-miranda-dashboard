import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchFrom from "../../utils/fetchFrom";

export const fetchBookings = createAsyncThunk("bookings/fetchBookings",

  async () => {
    const response = await fetchFrom("guests");
    return response;
  }
);

const initialState = {
  bookings: [],
  singleBooking: {},
  status: 'idle',
};

export const bookingsSlice = createSlice({
  name: "bookingsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.status = 'pending';
        console.log("Loading...");
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.bookings = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(fetchBookings.rejected, (state) => {
        state.status = 'rejected';
        console.log("Failure while fetching the requested data!");
      });
  },
});

export default bookingsSlice.reducer;
export const selectBookings = (state) => state.bookings.bookings;
export const bookingsStatus = (state) => state.bookings.status;

