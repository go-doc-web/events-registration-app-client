import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./reduxSlice/eventsSlice";
import registerSlice from "./reduxSlice/registerSlice";
export const store = configureStore({
  reducer: {
    event: eventsSlice,
    register: registerSlice,
  },
});
