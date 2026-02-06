import { View, Text, Image } from "react-native";
import { forecastStyles } from "../../style";
import { Fragment, use } from "react";
import { forecast } from "@/data";
import { format } from "date-fns";
import { SettingsContext } from "@/context/SettingsContext";
import { getFixedTemp } from "@/helpers/common";

const TodaysForecast = () => {
  const context = use(SettingsContext);

  if (!context) return null;
  const { settings } = context;
  const tempSetting = settings.find(
    (setting) => setting.title === "TEMPERATURE",
  );
  const now = forecast.location.localtime_epoch;

  const todaysForecast = forecast.forecast.forecastday[0].hour
    .filter((h) => h.time_epoch >= now)
    .slice(0, 3);

  return (
    <View style={forecastStyles.todaysForecastContainer}>
      <View style={forecastStyles.todaysForecastTitleContainer}>
        <Text style={forecastStyles.todaysForecastTitle}>TODAY'S FORECAST</Text>
      </View>
      <View style={forecastStyles.todaysForecastRow}>
        {todaysForecast.map((forecast, index) => (
          <Fragment key={`todays-forecast-${forecast.time}-${index}`}>
            {index === 1 && (
              <View style={forecastStyles.singleForecastLine}></View>
            )}
            <View
              key={`forecast-todays-${index}`}
              style={[forecastStyles.singleForecast]}
            >
              <Text style={forecastStyles.singleForecastTime}>
                {format(forecast.time, "HH:mm")}
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
            {index === 1 && (
              <View style={forecastStyles.singleForecastLine}></View>
            )}
          </Fragment>
        ))}
      </View>
    </View>
  );
};

export default TodaysForecast;
