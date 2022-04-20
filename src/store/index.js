import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../slices/search";


const store = configureStore({
  reducer: {
     search: searchSlice,
  },
});

export default store;
