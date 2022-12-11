import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchFrom from "../../utils/fetchFrom";

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",

  async () => {
    const response = await fetchFrom("guests");
    return response;
  }
);

export const fetchBooking = createAsyncThunk(
  "booking/fetchBooking",

  async (id) => {
    const response = await fetchFrom("guests");
    const result = response.filter(guest => guest.id === id);
    return result;
  }
);

const initialState = {
  bookings: [],
  singleBooking: {
    id: "9f073bc2-0274-4f10-bd36-4eef756ef1ae",
    image: "https://i.pravatar.cc/150?img=70",
    full_name: "Dean Daniel",
    order_date: "11/09/2021",
    check_in: "01/01/2022",
    check_out: "07/01/2022",
    special_request:
      "mollit consect elit cillum proident esse voluptate commodo ulla",
    room_info: {
      number: 0,
      type: "Double",
    },
    price: "895,86 €",
    facilities: [],
    state: "Check In",
  },
  status: "idle",
};

export const bookingsSlice = createSlice({
  name: "bookingsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.status = "pending";
        console.log("Loading...");
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.bookings = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchBookings.rejected, (state) => {
        state.status = "rejected";
        console.log("Failure while fetching the requested data!");
      })
      .addCase(fetchBooking.fulfilled, (state, action) => {
        console.log('ACTION', action)
				state.singleBooking = action.payload[0];
				state.status = 'ok';
			})
  },
});

export default bookingsSlice.reducer;
export const selectBookings = (state) => state.bookings.bookings;
export const selectBooking = (state) => state.bookings.singleBooking;
export const bookingsStatus = (state) => state.bookings.status;
