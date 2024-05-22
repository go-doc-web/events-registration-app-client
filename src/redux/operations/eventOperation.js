import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// import config from "../../config/apiConfig";

const axiosInstanse = axios.create({
  baseURL:
    import.meta.env.VITE_REACT_APP_API_URL_LOCAL ||
    import.meta.env.VITE_REACT_APP_API_URL_DEPLOY,

  // timeout: config.timeout,
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

export const getParticipantsByIdEvent = createAsyncThunk(
  "participant/getParticipantsByIdEvent",
  async ({ eventId }, { thunkAPI }) => {
    try {
      const res = await axiosInstanse.get(`/events/${eventId}/participants`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
