import { View, Text, Image } from "react-native";
import { forecastStyles } from "../../style";

const WeeklyForecast = () => {
  return (
    <View style={forecastStyles.weeklyForecastContainer}>
      <Text style={forecastStyles.weeklyForecastTitle}>7-DAY FORECAST</Text>
      <View style={forecastStyles.weeklyForecastListContainer}>
        {Array.from({ length: 10 }).map((_, index, arr) => (
          <View
            key={`weeklyforecast-list-item-${index}`}
            style={[
              forecastStyles.singleWeeklyForecast,
              { borderBottomWidth: index === arr.length - 1 ? 0 : 0.2 },
            ]}
          >
            <Text style={forecastStyles.singleWeeklyForecastDay}>Today</Text>
            <View style={forecastStyles.singleWeeklyForecastWeather}>
              <View style={forecastStyles.singleWeeklyForecastWeatherIconBox}>
                <Image
                  source={require("@/assets/images/sun.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "16/10",
                    objectFit: "contain",
                  }}
                />
              </View>
              <Text style={forecastStyles.singleWeeklyForecastWeatherTitle}>
                Sunny
              </Text>
            </View>
            <Text style={forecastStyles.singleWeeklyForecastWeatherInterval}>
              36/22
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default WeeklyForecast;
