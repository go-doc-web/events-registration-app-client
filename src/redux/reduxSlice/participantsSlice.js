import { createSlice } from "@reduxjs/toolkit";
import { getParticipantsByIdEvent } from "../operations/eventOperation";

const initialState = {
  participants: [],
  isLoading: false,
  error: null,
};

const participantsSlice = createSlice({
  name: "participant",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getParticipantsByIdEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getParticipantsByIdEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.participants = action.payload;
      })
      .addCase(getParticipantsByIdEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default participantsSlice.reducer;
