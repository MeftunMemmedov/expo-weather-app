import { View, Text, Image } from "react-native";
import { forecastStyles } from "../../style";
import { forecast } from "@/data";
import { format, fromUnixTime, isToday, isTomorrow } from "date-fns";
import { useSettings } from "@/hooks";

const WeeklyForecast = () => {
  const { getSetting } = useSettings();

  const tempSetting = getSetting("TEMPRATURE");

  const getDayLabel = (epoch: number) => {
    const date = fromUnixTime(epoch);
    if (isToday(date)) return "Today";
    if (isTomorrow(date)) return "Tomorrow";

    return format(date, "EEEE");
  };

  return (
    <View style={forecastStyles.weeklyForecastContainer}>
      <Text style={forecastStyles.weeklyForecastTitle}>7-DAY FORECAST</Text>
      <View style={forecastStyles.weeklyForecastListContainer}>
        {forecast.forecast.forecastday.map((forecast, index, arr) => (
          <View
            key={`weeklyforecast-list-item-${index}`}
            style={[
              forecastStyles.singleWeeklyForecast,
              { borderBottomWidth: index === arr.length - 1 ? 0 : 0.2 },
            ]}
          >
            <Text style={forecastStyles.singleWeeklyForecastDay}>
              {getDayLabel(forecast.date_epoch)}
            </Text>
            <View style={forecastStyles.singleWeeklyForecastWeather}>
              <View style={forecastStyles.singleWeeklyForecastWeatherIconBox}>
                <Image
                  source={{ uri: `https:${forecast.day.condition.icon}` }}
                  style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "16/10",
                    objectFit: "contain",
                  }}
                />
              </View>
              <Text
                style={[
                  forecastStyles.singleWeeklyForecastWeatherTitle,
                  {
                    fontSize: forecast.day.condition.text.length > 8 ? 14 : 18,
                  },
                ]}
              >
                {forecast.day.condition.text}
              </Text>
            </View>
            <Text style={forecastStyles.singleWeeklyForecastWeatherInterval}>
              {tempSetting?.selected === "Celsius"
                ? `${forecast.day.mintemp_c.toFixed()} / ${forecast.day.maxtemp_c.toFixed(0)}`
                : `${forecast.day.mintemp_f.toFixed()} / ${forecast.day.maxtemp_f.toFixed(0)}`}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default WeeklyForecast;
