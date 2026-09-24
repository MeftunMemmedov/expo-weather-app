import { Forecast, Status, Weather } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { getCurrentWeather, getForecast } from "./actions";
import { FAILURE, initialStatus, LOADING, SUCCESS } from "@/constants/status";

interface StateProps {
  currentWeather: Weather | null;
  forecast: Forecast | null;
  status: {
    currentWeather: Status;
    forecast: Status;
  };
}

const initialState: StateProps = {
  currentWeather: null,
  forecast: null,
  status: {
    currentWeather: initialStatus,
    forecast: initialStatus,
  },
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentWeather.pending, (state) => {
        state.status.currentWeather = LOADING;
      })
      .addCase(getCurrentWeather.fulfilled, (state, { payload }) => {
        state.status.currentWeather = SUCCESS;
        state.currentWeather = payload;
      })
      .addCase(getCurrentWeather.rejected, (state, action) => {
        state.status.currentWeather = FAILURE;
      });
    builder
      .addCase(getForecast.pending, (state) => {
        state.status.forecast = LOADING;
      })
      .addCase(getForecast.fulfilled, (state, { payload }) => {
        state.status.forecast = SUCCESS;
        state.forecast = payload;
      })
      .addCase(getForecast.rejected, (state, action) => {
        state.status.forecast = FAILURE;
      });
  },
});

export default weatherSlice.reducer;
