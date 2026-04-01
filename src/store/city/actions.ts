import { CityData } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import { detectCity } from "@/helpers/cities";

export const getCitiesFromStorage = createAsyncThunk(
  "city/getCitiesFromStorage",
  async () => {
    const localCurrentCity = await AsyncStorage.getItem("currentCity");
    const localCityList = await AsyncStorage.getItem("cities");

    let currentCity = localCurrentCity ? JSON.parse(localCurrentCity) : null;
    let savedCities = localCityList ? JSON.parse(localCityList) : [];

    if (!currentCity) {
      const locatedCity = await detectCity();
      if (locatedCity) {
        currentCity = locatedCity;
        savedCities = [locatedCity];
      }
      await AsyncStorage.setItem("currentCity", JSON.stringify(currentCity));
      await AsyncStorage.setItem("cities", JSON.stringify(savedCities));
    }
    return {
      currentCity,
      savedCities,
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

export const removeCityFromStorage = createAsyncThunk<
  CityData[],
  { newCity: CityData },
  { state: RootState }
>("city/addCityToStorage", async ({ newCity }, { getState }) => {
  const { savedCities } = getState().city;

  const updatedCities = savedCities.filter((city) => city.id !== newCity.id);
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
