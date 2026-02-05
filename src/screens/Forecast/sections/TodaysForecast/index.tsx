import { View, Text, Image } from "react-native";
import { forecastStyles } from "../../style";
import { Fragment } from "react";

const TodaysForecast = () => {
  return (
    <View style={forecastStyles.todaysForecastContainer}>
      <View style={forecastStyles.todaysForecastTitleContainer}>
        <Text style={forecastStyles.todaysForecastTitle}>TODAY'S FORECAST</Text>
      </View>
      <View style={forecastStyles.todaysForecastRow}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Fragment key={`todays-forecast-${index}`}>
            {index === 1 && (
              <View style={forecastStyles.singleForecastLine}></View>
            )}
            <View
              key={`forecast-todays-${index}`}
              style={[forecastStyles.singleForecast]}
            >
              <Text style={forecastStyles.singleForecastTime}>9:00 AM</Text>
              <View style={forecastStyles.singleForecastWeatherIconBox}>
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
              <Text style={forecastStyles.singleForecastDegree}>25°</Text>
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
