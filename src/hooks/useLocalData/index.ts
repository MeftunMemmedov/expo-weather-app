import { CityData } from "@/types";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useLocalData = () => {
  const [citiesData, setCitiesData] = useState<CityData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getCities = async () => {
    try {
      setIsLoading(true);
      const citiesStorage = await AsyncStorage.getItem("cities");

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
      AsyncStorage.setItem("cities", JSON.stringify(updated));
      return updated;
    });
  };

  const removeCity = async (lat: number, lon: number) => {
    setCitiesData((prevCities) => {
      const updatedCities = prevCities.filter(
        (city) => city.lat !== lat || city.lon !== lon,
      );

      AsyncStorage.setItem("cities", JSON.stringify(updatedCities));
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
