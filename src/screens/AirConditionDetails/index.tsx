import Container from "@/components/Container";
import TopInfo from "@/components/TopInfo";
import { AirConditionData } from "@/types";
import { View, Text } from "react-native";
import { styles } from "./style";
import { getChancheOfRain, getFixedTemp } from "@/helpers/common";
import { useSettings } from "@/hooks";
import { useAppSelector } from "@/store/hooks";

const AirConditionDetails = () => {
  const { getSetting } = useSettings();
  const tempSetting = getSetting("TEMPRATURE");
  const windSetting = getSetting("WIND SPEED");
  const pressureSetting = getSetting("PRESSURE");

  const { forecast, currentWeather: current } = useAppSelector(
    (store) => store.weather,
  );
  if (forecast == null || current == null) return;

  const chance_of_rain = getChancheOfRain(forecast.forecast.forecastday);

  const getPressure = () => {
    if (pressureSetting.selected === "hPa") {
      return `${current.current.pressure_mb} hPa`;
    } else if (pressureSetting.selected === "Inches") {
      return `${current.current.pressure_in} Inches`;
    }
  };

  const currentPressure = getPressure();

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
      value: currentPressure,
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
