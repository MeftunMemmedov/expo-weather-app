import { View, Text, Pressable } from "react-native";
import { forecastStyles } from "../../style";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { secondary_text_color } from "@/constants/colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AirConditionData, RootStackParamList } from "@/types";

const Airconditions = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

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
      value: "30°",
    },
    {
      title: "Wind",
      icon: <FontAwesome5 name="wind" size={24} color={secondary_text_color} />,
      value: "0.2 km/h",
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
      value: "0%",
    },
    {
      title: "UV index",
      icon: <FontAwesome5 name="sun" size={24} color={secondary_text_color} />,
      value: "3",
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
