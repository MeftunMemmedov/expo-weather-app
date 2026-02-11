import {
  main_blue,
  primary_text_color,
  secondary_color,
  secondary_text_color,
} from "@/constants/colors";
import { borderRadiusVal } from "@/constants/commonstyles";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

const isTablet = width >= 768;

export const forecastStyles = StyleSheet.create({
  //   today's forecast
  todaysForecastContainer: {
    width: "100%",
    padding: 25,
    borderRadius: borderRadiusVal,
    backgroundColor: secondary_color,
  },
  todaysForecastTitleContainer: {},
  todaysForecastTitle: {
    fontWeight: "bold",
    color: secondary_text_color,
  },
  todaysForecastRow: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    // gap:3
  },
  singleForecast: {
    width: "33%",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  singleForecastLine: { width: 0.2, height: "100%", backgroundColor: "gray" },
  singleForecastTime: {
    fontWeight: "bold",
    fontSize: 18,
    color: secondary_text_color,
  },
  singleForecastWeatherIconBox: {
    aspectRatio: "16/12",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  singleForecastDegree: {
    fontWeight: "bold",
    fontSize: 20,
    color: primary_text_color,
  },
  //   weekly forecast
  weeklyForecastContainer: {
    width: "100%",
    padding: 25,
    borderRadius: borderRadiusVal,
    backgroundColor: secondary_color,
  },
  weeklyForecastTitleContainer: {},
  weeklyForecastTitle: {
    fontWeight: "bold",
    color: secondary_text_color,
  },
  weeklyForecastListContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    paddingTop: 15,
  },
  singleWeeklyForecast: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderColor: secondary_text_color,
  },
  singleWeeklyForecastDay: {
    fontSize: 18,
    color: secondary_text_color,
    width: "30%",
  },
  singleWeeklyForecastWeather: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    gap: 5,
    width: "50%",
  },
  singleWeeklyForecastWeatherIconBox: {
    width: 35,
    aspectRatio: "1/1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  singleWeeklyForecastWeatherTitle: {
    fontWeight: "bold",
    color: primary_text_color,
  },
  singleWeeklyForecastWeatherInterval: {
    fontWeight: "bold",
    // fontSize: 15,
    color: primary_text_color,
    width: "20%",
    textAlign: "right",
  },
  // air conditions
  airconditionsContainer: {
    width: "100%",
    padding: 25,
    borderRadius: borderRadiusVal,
    backgroundColor: secondary_color,
  },
  airconditionsHeadingBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  airconditionsHeadingTItle: {
    fontWeight: "bold",
    color: secondary_text_color,
  },
  airconditionsSeemoreBtn: {
    backgroundColor: main_blue,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  airconditionsSeemoreText: {
    color: "white",
    fontWeight: "bold",
  },
  airconditionsRow: {
    flexDirection: "row",
    flexWrap: isTablet ? "nowrap" : "wrap",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  singleAircondition: {
    flexDirection: "row",
    gap: 5,
    width: isTablet ? "20%" : "50%",
    paddingVertical: 10,
  },
  singleAirconditionLeft: {
    width: "20%",
    overflow: "visible",
  },
  singleAirconditionRight: {
    width: "80%",
    flexDirection: "column",
    gap: 8,
  },
  singleAirconditionRightText: {
    fontSize: 15,
    fontWeight: "600",
    color: secondary_text_color,
  },
  singleAirconditionValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: primary_text_color,
  },
});
