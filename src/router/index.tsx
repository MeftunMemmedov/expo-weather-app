import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./BottomTabs";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { getCitiesFromStorage } from "@/store/city/actions";
import { getCurrentWeather, getForecast } from "@/store/weather/actions";

const AppRouter = () => {
  const dispatch = useAppDispatch();
  const { currentCity } = useAppSelector((store) => store.city);
  const {
    currentWeather,
    forecast,
    error,
    status: {
      currentWeather: { LOADING: isCurrentWeatherLoading },
      forecast: { LOADING: isForecastLoading },
    },
  } = useAppSelector((store) => store.weather);

  useEffect(() => {
    if (currentCity == null) {
      dispatch(getCitiesFromStorage());
    } else if (currentCity !== null) {
      dispatch(getCurrentWeather(`${currentCity.lat},${currentCity.lon}`));
      dispatch(
        getForecast({ q: `${currentCity.lat},${currentCity.lon}`, days: 7 }),
      );
    }
  }, [currentCity]);

  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};

export default AppRouter;
