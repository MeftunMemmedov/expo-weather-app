import { Forecast, Weather } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { getCurrentWeather, getForecast } from "./actions";

type Status = {
  LOADING: boolean;
  SUCCESS: boolean;
  FAILURE: boolean;
};

interface StateProps {
  currentWeather: Weather | null;
  forecast: Forecast | null;
  status: {
    currentWeather: Status;
    forecast: Status;
  };
  error: any;
}

const initialStatus: Status = {
  LOADING: false,
  SUCCESS: false,
  FAILURE: false,
};

const LOADING: Status = { LOADING: true, SUCCESS: false, FAILURE: false };
const SUCCESS: Status = { LOADING: false, SUCCESS: true, FAILURE: false };
const FAILURE: Status = { LOADING: true, SUCCESS: false, FAILURE: true };

const initialState: StateProps = {
  currentWeather: null,
  forecast: null,
  status: {
    currentWeather: initialStatus,
    forecast: initialStatus,
  },
  error: null,
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
        state.error = action.payload;
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
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
