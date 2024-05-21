import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../operations/eventOperation";

const initialState = {
  events: [],
  isLoading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: "event",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default eventsSlice.reducer;
