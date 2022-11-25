import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchFrom from "../../utils/fetchFrom";

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",

  async () => {
    const response = await fetchFrom("guests");
    return response;
  }
);

const initialState = {
  bookings: [],
};

export const bookingsSlice = createSlice({
  name: "bookingsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.isLoading = true;
        console.log("Loading...");
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookings = action.payload;
      })
      .addCase(fetchBookings.rejected, (state) => {
        state.isLoading = true;
        console.log("Failure while fetching the requested data!");
      });
  },
});

export default bookingsSlice.reducer;
export const selectBookings = (state) => state.bookings.bookings;

