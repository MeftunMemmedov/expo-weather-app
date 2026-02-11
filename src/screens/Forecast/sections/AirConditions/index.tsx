import { View, Text, Pressable } from "react-native";
import { forecastStyles } from "../../style";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { secondary_text_color } from "@/constants/colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AirConditionData, RootStackParamList } from "@/types";
import { useSettings } from "@/hooks";
import { getChancheOfRain, getFixedTemp } from "@/helpers/common";
import { useAppSelector } from "@/store/hooks";

const Airconditions = () => {
  const { getSetting } = useSettings();

  const tempSetting = getSetting("TEMPRATURE");
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const { currentWeather: current, forecast } = useAppSelector(
    (store) => store.weather,
  );

  const chance_of_rain = forecast
    ? getChancheOfRain(forecast.forecast.forecastday)
    : null;

  if (current == null || forecast == null) return null;

  const airConditionData: AirConditionData[] = [
    {
      title: "Real feel",
      icon: (
        <FontAwesome6
          name="temperature-half"
          size={24}
          color={secondary_text_color}
        />
      ),
      value: `${tempSetting?.selected === "Celsius" ? getFixedTemp(current.current.temp_c) : getFixedTemp(current.current.temp_f)}`,
    },
    {
      title: "Wind",
      icon: <FontAwesome5 name="wind" size={24} color={secondary_text_color} />,
      value: `${current.current.wind_kph} km/h`,
    },
    {
      title: "Chance of rain",
      icon: (
        <Ionicons
          name="water-sharp"
          size={24}
          style={{ marginLeft: -4 }}
          color={secondary_text_color}
        />
      ),
      value: `${chance_of_rain}%`,
    },
    {
      title: "UV index",
      icon: <FontAwesome5 name="sun" size={24} color={secondary_text_color} />,
      value: current.current.uv.toFixed().toString(),
    },
  ];

  return (
    <View style={forecastStyles.airconditionsContainer}>
      <View style={forecastStyles.airconditionsHeadingBox}>
        <Text style={forecastStyles.airconditionsHeadingTItle}>
          AIR CONDITIONS
        </Text>
        <Pressable
          style={forecastStyles.airconditionsSeemoreBtn}
          onPress={() => navigate("AirConditions")}
        >
          <Text style={forecastStyles.airconditionsSeemoreText}>See more</Text>
        </Pressable>
      </View>
      <View style={forecastStyles.airconditionsRow}>
        {airConditionData.map((aircondition, index) => (
          <View
            key={`air-condition-${aircondition.title}-${index}`}
            style={forecastStyles.singleAircondition}
          >
            <View style={forecastStyles.singleAirconditionLeft}>
              {aircondition.icon}
            </View>
            <View style={forecastStyles.singleAirconditionRight}>
              <Text style={forecastStyles.singleAirconditionRightText}>
                {aircondition.title}
              </Text>
              <Text style={forecastStyles.singleAirconditionValue}>
                {aircondition.value}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Airconditions;
