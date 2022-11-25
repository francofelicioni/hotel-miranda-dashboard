import { configureStore } from "@reduxjs/toolkit";

import bookingsReducer from "../features/bookings/bookingsSlice";
import roomsReducer from "../features/rooms/roomsSlice";

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    // contact: contactReducer,
    rooms: roomsReducer,
    // users: usersReducer,
  },
});
