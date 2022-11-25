import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchFrom from "../../utils/fetchFrom";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",

  async () => {
    const response = await fetchFrom("users");
    return response;
  }
);

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        console.log("Loading...");
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = true;
        console.log("Failure while fetching the request data!");
      });
  },
});

export default usersSlice.reducer;
export const selectUsers = (state) => state.users.users;
