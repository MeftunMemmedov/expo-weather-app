import axiosInstance from "@/api";
import { CityData } from "@/types";
import * as Location from "expo-location";

export const detectCity = async (): Promise<CityData | null> => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      throw new Error("Permission denied");
    }

    let location = await Location.getLastKnownPositionAsync();

    if (!location) {
      location = await Location.getCurrentPositionAsync({});
    }
    const { latitude, longitude } = location.coords;

    const geo = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    const place = geo[0];

    const { data } = await axiosInstance.get(`/search.json`, {
      params: { q: `${latitude},${longitude}` },
    });

    return data[0];
  } catch {
    return null;
  }
};
