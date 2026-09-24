import { CityData } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import {
  addCityToStorage,
  getCitiesFromStorage,
  setCurrentCity,
} from "./actions";

interface CityState {
  currentCity: CityData | null;
  savedCities: CityData[];
  isLoading: boolean;
  isFailed: boolean;
}

const initialState: CityState = {
  currentCity: null,
  savedCities: [],
  isLoading: false,
  isFailed: false,
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCitiesFromStorage.pending, (state) => {
        state.isLoading = true;
        state.isFailed = false;
      })
      .addCase(getCitiesFromStorage.fulfilled, (state, { payload }) => {
        state.currentCity = payload.currentCity;
        state.savedCities = payload.savedCities;
        state.isLoading = false;
      })
      .addCase(getCitiesFromStorage.rejected, (state) => {
        state.isLoading = false;
        state.isFailed = true;
      });
    builder.addCase(addCityToStorage.fulfilled, (state, { payload }) => {
      state.savedCities = payload;
    });
    builder.addCase(setCurrentCity.fulfilled, (state, { payload }) => {
      state.currentCity = payload;
    });
  },
});

export default citySlice.reducer;
