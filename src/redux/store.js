import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./reduxSlice/eventsSlice";
import registerSlice from "./reduxSlice/registerSlice";
import participantsSlice from "./reduxSlice/participantsSlice";
export const store = configureStore({
  reducer: {
    event: eventsSlice,
    register: registerSlice,
    participant: participantsSlice,
  },
});
