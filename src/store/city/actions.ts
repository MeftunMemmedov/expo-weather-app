import { CityData } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import { detectCity } from "@/helpers/cities";
import { CITIES_KEY, CURRENT_CITY_KEY } from "@/constants/storageKeys";

export const getCitiesFromStorage = createAsyncThunk(
  "city/getCitiesFromStorage",
  async () => {
    const localCurrentCity = await AsyncStorage.getItem(CURRENT_CITY_KEY);
    const localCityList = await AsyncStorage.getItem(CITIES_KEY);

    let currentCity = localCurrentCity ? JSON.parse(localCurrentCity) : null;
    let savedCities = localCityList ? JSON.parse(localCityList) : [];

    if (!currentCity) {
      const locatedCity = await detectCity();
      if (locatedCity) {
        currentCity = locatedCity;

        const isCityAlreadySaved = savedCities.some(
          (c: CityData) => c.id === locatedCity.id,
        );
        if (!isCityAlreadySaved) {
          savedCities = [locatedCity, ...savedCities];
        }
      }
      await AsyncStorage.setItem(CURRENT_CITY_KEY, JSON.stringify(currentCity));
      await AsyncStorage.setItem(CITIES_KEY, JSON.stringify(savedCities));
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
  await AsyncStorage.setItem(CITIES_KEY, JSON.stringify(updatedCities));

  return updatedCities;
});

export const removeCityFromStorage = createAsyncThunk<
  CityData[],
  { newCity: CityData },
  { state: RootState }
>("city/addCityToStorage", async ({ newCity }, { getState }) => {
  const { savedCities } = getState().city;

  const updatedCities = savedCities.filter((city) => city.id !== newCity.id);
  await AsyncStorage.setItem(CITIES_KEY, JSON.stringify(updatedCities));

  return updatedCities;
});

export const setCurrentCity = createAsyncThunk(
  "city/setCurrentCity",
  async (city: CityData) => {
    await AsyncStorage.setItem(CURRENT_CITY_KEY, JSON.stringify(city));

    return city;
  },
);
