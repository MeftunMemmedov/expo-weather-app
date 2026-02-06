import Container from "@/components/Container";
import TopInfo from "@/components/TopInfo";
import { AirConditionData } from "@/types";
import { View, Text } from "react-native";
import { styles } from "./style";
import { current, forecast } from "@/data";
import { getChancheOfRain, getFixedTemp } from "@/helpers/common";
import { useSettings } from "@/hooks";

const AirConditionDetails = () => {
  const { getSetting } = useSettings();
  const tempSetting = getSetting("TEMPRATURE");
  const chance_of_rain = getChancheOfRain(forecast.forecast.forecastday);

  const airConditionData: AirConditionData[] = [
    {
      title: "UV INDEX",
      value: current.current.uv.toFixed().toString(),
    },
    {
      title: "WIND",
      value: `${current.current.wind_kph} km/h`,
    },
    {
      title: "HUMIDITY",
      value: `${current.current.humidity}%`,
    },
    {
      title: "VISIBILITY",
      value: `${current.current.vis_km} km`,
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
      value: `${current.current.pressure_mb} hPa`,
    },
    {
      title: "SUNSET",
      value: `${forecast.forecast.forecastday[0].astro.sunset}`,
    },
  ];
  return (
    <Container scroll>
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
