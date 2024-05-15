import { configureStore } from "@reduxjs/toolkit";
import { eventsReduser } from "./redusers/eventsReduser";

export const store = configureStore({
  reducer: {
    events: eventsReduser,
  },
});
