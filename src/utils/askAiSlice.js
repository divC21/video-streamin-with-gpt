import { createSlice } from "@reduxjs/toolkit";

const askAiSlice = createSlice({
  name: "askAi",
  initialState: {
    displayAskAiView: false,
    topMovies: false,
  },
  reducers: {
    toggleAskAiView: (state, action) => {
      state.displayAskAiView = !state.displayAskAiView;
    },
    saveTopMovies: (state, action) => {
      state.topMovies = action.payload;
    },
  },
});

export const { toggleAskAiView, saveTopMovies } = askAiSlice.actions;
export default askAiSlice.reducer;
