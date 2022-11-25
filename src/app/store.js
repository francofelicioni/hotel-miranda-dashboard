import { configureStore } from "@reduxjs/toolkit";

import bookingsReducer from "../features/bookings/bookingsSlice";
import roomsReducer from "../features/rooms/roomsSlice";
import userReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    // contact: contactReducer,
    rooms: roomsReducer,
    users: userReducer,
  },
});
