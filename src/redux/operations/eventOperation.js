import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import config from "../../config/apiConfig";

const axiosInstanse = axios.create({
  baseURL: config.baseUrl,
  timeout: config.timeout,
  headers: {
    "Content-Type": "application/json",
  },
});

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

export const EventRegistrationById = createAsyncThunk(
  "register/asyncEventRegistration",
  async ({ eventId, formData }, { thunkAPI }) => {
    try {
      const res = await axiosInstanse.post(
        `/events/${eventId}/register`,
        formData
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
