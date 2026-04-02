import Container from "@/components/Container";
import TodaysForecast from "./sections/TodaysForecast";
import { RefreshControl, View } from "react-native";
import WeeklyForecast from "./sections/WeeklyForecast";
import Airconditions from "./sections/AirConditions";
import TopInfo from "@/components/TopInfo";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import LoadingSpinnner from "@/components/LoadingSpinner";
import ErrorMessage from "@/components/ErrorMessage";
import { useState } from "react";
import { getCurrentWeather, getForecast } from "@/store/weather/actions";

const Forecast = () => {
  const [isRefresing, setIsRefreshing] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { currentCity } = useAppSelector((store) => store.city);

  const {
    status: {
      currentWeather: {
        LOADING: isCurrentWeatherLoading,
        FAILURE: isCurrentWeatherFailed,
      },
      forecast: { LOADING: isForecastLoading, FAILURE: isForecastFailed },
    },
  } = useAppSelector((store) => store.weather);

  const handleRefresh = () => {
    if (currentCity === null) return;
    try {
      setIsRefreshing(true);
      dispatch(getCurrentWeather(`${currentCity.lat},${currentCity.lon}`));
      dispatch(
        getForecast({ q: `${currentCity.lat},${currentCity.lon}`, days: 7 }),
      );
    } finally {
      setIsRefreshing(false);
    }
  };

  if (isCurrentWeatherLoading || isForecastLoading) return <LoadingSpinnner />;
  if (isCurrentWeatherFailed || isForecastFailed) return <ErrorMessage />;
  return (
    <Container
      refreshing={isRefresing && (isCurrentWeatherLoading || isForecastLoading)}
      onRefresh={handleRefresh}
      scroll
    >
      <TopInfo />
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
          paddingTop: 60,
          paddingBottom: 60,
        }}
      >
        <TodaysForecast />
        <WeeklyForecast />
        <Airconditions />
      </View>
    </Container>
  );
};

export default Forecast;
