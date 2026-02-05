import Container from "@/components/Container";
import TodaysForecast from "./sections/TodaysForecast";
import { View } from "react-native";
import WeeklyForecast from "./sections/WeeklyForecast";
import Airconditions from "./sections/AirConditions";
import TopInfo from "@/components/TopInfo";

const Forecast = () => {
  return (
    <Container scroll>
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
