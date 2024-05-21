import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./reduxSlice/eventsSlice";

export const store = configureStore({
  reducer: {
    event: eventsSlice,
  },
});
