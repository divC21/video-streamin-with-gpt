import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
  },
  reducers: {
    saveNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
  },
});

export const { saveNowPlaying } = movieSlice.actions;
export default movieSlice.reducer;
