import { createSlice } from "@reduxjs/toolkit";
import { EventRegistrationById } from "../operations/eventOperation";
const initialState = {
  formData: {
    fullName: "",
    email: "",
    birthDate: "",
    source: "",
  },
  isLoading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(EventRegistrationById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(EventRegistrationById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.formData = action.payload;
      })
      .addCase(EventRegistrationById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default registerSlice.reducer;
