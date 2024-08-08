import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllData } from "../../utils/fetchData";

export const fetchContacts = createAsyncThunk(
  "contact/fetchContacts",

  async () => {
    const response = await getAllData(process.env.REACT_APP_BACKEND_URL+'contacts');
    console.log('response', response)
    return response;
  }
);

const initialState = {
  contacts: [],
  status: "idle",
};

export const contactSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = "pending";
        console.log("Loading...");
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.status = "rejected";
        console.log("Failure while fetching the requested data!");
      });
  },
});

export default contactSlice.reducer;
export const selectContacts = (state) => state.contacts.contacts;
export const contactsStatus = (state) => state.contacts.status;
