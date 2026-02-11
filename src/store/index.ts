import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./city";
import weatherReducer from "./weather";

export const store = configureStore({
  reducer: {
    city: cityReducer,
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
