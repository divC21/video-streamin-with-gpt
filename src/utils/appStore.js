import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import movieReducer from "../utils/movieSlice";
import askAiReducer from "../utils/askAiSlice";

export const appStore = configureStore({
  reducer: {
    userReducer,
    movieReducer,
    askAiReducer,
  },
});
