import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import movieReducer from "../utils/movieSlice";
import askAiReducer from "../utils/askAiSlice";
import appReducer from "../utils/appSlice";

export const appStore = configureStore({
  reducer: {
    userReducer,
    movieReducer,
    askAiReducer,
    appReducer,
  },
});
