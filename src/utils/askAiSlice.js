import { createSlice } from "@reduxjs/toolkit";

const askAiSlice = createSlice({
  name: "askAi",
  initialState: {
    displayAskAiView: false,
  },
  reducers: {
    toggleAskAiView: (state, action) => {
      state.displayAskAiView = !state.displayAskAiView;
    },
  },
});

export const { toggleAskAiView } = askAiSlice.actions;
export default askAiSlice.reducer;
