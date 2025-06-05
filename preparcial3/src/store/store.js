import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./slices/counter/characterSlice";
export const store = configureStore({
  reducer: {
    characters: characterReducer,
    // user: userReducer,
  },
});
