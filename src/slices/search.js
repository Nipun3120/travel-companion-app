import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchField: "",
    searchMode: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.searchField = action.payload;
    },
    setSearchMode: (state, action) => {
      state.searchMode = action.payload;
    },
  },
});

export const { setSearch, setSearchMode } = searchSlice.actions;

export default searchSlice.reducer;
