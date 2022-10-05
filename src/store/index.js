import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../slices/search";
import authSlice from "../slices/auth";

const store = configureStore({
  reducer: {
    search: searchSlice,
    auth: authSlice,
  },
});

export default store;
