import { CityData } from "@/types";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CITIES_KEY } from "@/constants/storageKeys";

const useLocalData = () => {
  const [citiesData, setCitiesData] = useState<CityData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCities = async () => {
    try {
      setIsLoading(true);
      const citiesStorage = await AsyncStorage.getItem(CITIES_KEY);

      const cities = citiesStorage ? JSON.parse(citiesStorage) : [];

      setCitiesData(cities);
    } catch (error) {
      console.log("localstorage error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addCity = async (cityData: CityData) => {
    setCitiesData((prevCities) => {
      const updated = [...prevCities, cityData];
      AsyncStorage.setItem(CITIES_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const removeCity = async (lat: number, lon: number) => {
    setCitiesData((prevCities) => {
      const updatedCities = prevCities.filter(
        (city) => city.lat !== lat || city.lon !== lon,
      );

      AsyncStorage.setItem(CITIES_KEY, JSON.stringify(updatedCities));
      return updatedCities;
    });
  };

  return {
    cities: citiesData,
    isLoading,
    getCities,
    addCity,
    removeCity,
  };
};

export default useLocalData;
