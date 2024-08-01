import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "./mailSlice";

const store = configureStore({
  reducer: {
    mailSlice: mailSlice,
  },
});

export default store;
