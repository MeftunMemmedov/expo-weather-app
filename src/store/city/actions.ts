import { CityData } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";

export const getCitiesFromStorage = createAsyncThunk(
  "city/getCitiesFromStorage",
  async () => {
    const localCurrentCity = await AsyncStorage.getItem("currentCity");
    const localCityList = await AsyncStorage.getItem("cities");

    return {
      currentCity: localCurrentCity ? JSON.parse(localCurrentCity) : null,
      savedCities: localCityList ? JSON.parse(localCityList) : [],
    };
  },
);

export const addCityToStorage = createAsyncThunk<
  CityData[],
  { newCity: CityData },
  { state: RootState }
>("city/addCityToStorage", async ({ newCity }, { getState }) => {
  const { savedCities } = getState().city;

  const updatedCities = [...savedCities, newCity];
  await AsyncStorage.setItem("cities", JSON.stringify(updatedCities));

  return updatedCities;
});

export const setCurrentCity = createAsyncThunk(
  "city/setCurrentCity",
  async (city: CityData) => {
    await AsyncStorage.setItem("currentCity", JSON.stringify(city));

    return city;
  },
);
