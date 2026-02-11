import { getWeather } from "@/api/helpers";
import { Forecast, Weather } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const getCurrentWeather = createAsyncThunk<Weather, string>(
  "weather/getCurrentWeather",
  async (q, thunkAPI) => {
    try {
      const res = await getWeather<Weather>("current", q);

      return res;
    } catch (error) {
      const err = error as AxiosError;
      throw thunkAPI.rejectWithValue({
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      });
    }
  },
);

export const getForecast = createAsyncThunk<
  Forecast,
  { q: string; days: number }
>("weather/getForecast", async ({ q, days }, thunkAPI) => {
  try {
    const res = await getWeather<Forecast>("forecast", q, days);

    return res;
  } catch (error) {
    const err = error as AxiosError;
    throw thunkAPI.rejectWithValue({
      status: err.response?.status,
      data: err.response?.data,
      message: err.message,
    });
  }
});
