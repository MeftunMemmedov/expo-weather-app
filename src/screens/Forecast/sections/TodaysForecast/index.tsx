import { View, Text, Image } from "react-native";
import { forecastStyles } from "../../style";
import { Fragment } from "react";
import { format } from "date-fns";
import { getFixedTemp } from "@/helpers/common";
import { useAppSelector } from "@/store/hooks";
import { useSettings } from "@/hooks";
import { SETTING_TEMPERATURE_KEY } from "@/constants/settingKeys";

const TodaysForecast = () => {
  const { forecast } = useAppSelector((store) => store.weather);

  const { getUnitSetting, getGeneralSetting } = useSettings();

  const tempSetting = getUnitSetting(SETTING_TEMPERATURE_KEY);
  const is12Hours = getGeneralSetting("12 Hour Time")?.value;

  if (forecast === null) return;

  const now = forecast.location.localtime_epoch;
  const todaysForecast = forecast.forecast.forecastday[0].hour
    .filter((h) => h.time_epoch >= now)
    .slice(0, 3);


  if (todaysForecast.length === 0) return null;
  return (
    <View style={forecastStyles.todaysForecastContainer}>
      <View style={forecastStyles.todaysForecastTitleContainer}>
        <Text style={forecastStyles.todaysForecastTitle}>TODAY'S FORECAST</Text>
      </View>
      <View style={forecastStyles.todaysForecastRow}>
        {todaysForecast.map((forecast, index) => (
          <View
            key={`forecast-todays-${index}`}
            style={[forecastStyles.singleForecast]}
          >
            <Text style={forecastStyles.singleForecastTime}>
              {format(forecast.time, is12Hours ? "h:mm a" : "HH:mm")}
            </Text>
            <View style={forecastStyles.singleForecastWeatherIconBox}>
              <Image
                source={{ uri: `https:${forecast.condition.icon}` }}
                style={{
                  width: "100%",
                  height: "100%",
                  aspectRatio: "16/10",
                  objectFit: "contain",
                }}
              />
            </View>
            <Text style={forecastStyles.singleForecastDegree}>
              {tempSetting?.selected === "Celsius"
                ? getFixedTemp(forecast.temp_c)
                : getFixedTemp(forecast.temp_f)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TodaysForecast;
