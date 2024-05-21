import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import config from "../../config/apiConfig";

const axiosInstanse = axios.create({
  baseURL: config.baseUrl,
  timeout: config.timeout,
  headers: {
    "Content-Type": "application/json",
  },
});

const initialState = {
  events: [],
  isLoading: false,
  error: null,
};

export const getPosts = createAsyncThunk(
  "event/getPosts",
  async ({ page, pageSize }, { thunkAPI }) => {
    try {
      const res = await axiosInstanse.get(
        `/events?page=${page}&pageSize=${pageSize}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
