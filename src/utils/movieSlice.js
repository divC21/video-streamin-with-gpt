import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
    trailer: {},
  },
  reducers: {
    saveNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    saveTrailerInfo: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { saveNowPlaying, saveTrailerInfo } = movieSlice.actions;
export default movieSlice.reducer;
