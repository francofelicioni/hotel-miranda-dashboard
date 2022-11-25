import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchFrom from "../../utils/fetchFrom";

import rooms from '../../db/rooms.json';

export const fetchRooms = createAsyncThunk(
  "rooms/fetchRooms",

  async () => {
    const response = await fetchFrom("rooms");
    console.log("Fetch Rooms", response);
    return response;
  }
);

const initialState = {
  rooms: [],
};

export const roomsSlice = createSlice({
  name: "roomsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.isLoading = true;
        console.log("Loading...");
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rooms = action.payload;
        console.log(action);
      })
      .addCase(fetchRooms.rejected, (state) => {
        state.isLoading = true;
        console.log("Failure while fetching the requested data!");
      });
  },
});

export default roomsSlice.reducer;
export const selectRooms = (state) => state.roomsList.rooms;
