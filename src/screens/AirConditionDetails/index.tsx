import Container from "@/components/Container";
import TopInfo from "@/components/TopInfo";
import { AirConditionData } from "@/types";
import { View, Text } from "react-native";
import { styles } from "./style";
import { getChancheOfRain, getFixedTemp } from "@/helpers/common";
import { useSettings } from "@/hooks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useState } from "react";
import { getCurrentWeather, getForecast } from "@/store/weather/actions";
import LoadingSpinnner from "@/components/LoadingSpinner";
import ErrorMessage from "@/components/ErrorMessage";

const AirConditionDetails = () => {
  const dispatch = useAppDispatch();
  const {
    forecast,
    currentWeather: current,
    status: {
      currentWeather: {
        LOADING: isCurrentWeatherLoading,
        FAILURE: isCurrentWeatherFailed,
      },
      forecast: { LOADING: isForecastLoading, FAILURE: isForecastFailed },
    },
  } = useAppSelector((store) => store.weather);
  const { currentCity } = useAppSelector((store) => store.city);

  const { getSetting } = useSettings();
  const tempSetting = getSetting("TEMPERATURE");
  const windSetting = getSetting("WIND SPEED");
  const pressureSetting = getSetting("PRESSURE");
  const distanceSetting = getSetting("DISTANCE");

  if (forecast == null || current == null) return;

  const chance_of_rain = getChancheOfRain(forecast.forecast.forecastday);

  const [isRefresing, setIsRefreshing] = useState<boolean>(false);

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

  const airConditionData: AirConditionData[] = [
    {
      title: "UV INDEX",
      value: current.current.uv.toFixed().toString(),
    },
    {
      title: "WIND",
      value: `${windSetting.selected === "km/h" ? `${current.current.wind_kph} km/h` : `${current.current.wind_mph} mph`}`,
    },
    {
      title: "HUMIDITY",
      value: `${current.current.humidity}%`,
    },
    {
      title: "VISIBILITY",
      value:
        distanceSetting.selected === "Kilometers"
          ? `${current.current.vis_km} km`
          : `${current.current.vis_miles} mm`,
    },
    {
      title: "FEELS LIKE",
      value: `${tempSetting?.selected === "Celsius" ? getFixedTemp(current.current.feelslike_c) : getFixedTemp(current.current.feelslike_f)}`,
    },
    {
      title: "CHANCE OF RAIN",
      value: `${chance_of_rain}%`,
    },
    {
      title: "PRESSURE",
      value:
        pressureSetting.selected === "hPa"
          ? `${current.current.pressure_mb} hPa`
          : `${current.current.pressure_in} Inches`,
    },
    {
      title: "SUNSET",
      value: `${forecast.forecast.forecastday[0].astro.sunset}`,
    },
  ];

  if (isCurrentWeatherLoading || isForecastLoading) return <LoadingSpinnner />;
  if (isCurrentWeatherFailed || isForecastFailed) return <ErrorMessage />;
  return (
    <Container
      refreshing={isRefresing && (isCurrentWeatherLoading || isForecastLoading)}
      onRefresh={handleRefresh}
      scroll
    >
      <TopInfo />
      <View style={styles.airconditionsRow}>
        {airConditionData.map((aircondition, index) => (
          <View
            key={`air-condition-detail-${index}`}
            style={styles.singleAircondition}
          >
            <Text style={styles.singleAirconditionTitle}>
              {aircondition.title}
            </Text>
            <Text style={styles.singleAirconditionValue}>
              {aircondition.value}
            </Text>
          </View>
        ))}
      </View>
    </Container>
  );
};

export default AirConditionDetails;
