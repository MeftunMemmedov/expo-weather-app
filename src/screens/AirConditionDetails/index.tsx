import Container from "@/components/Container";
import TopInfo from "@/components/TopInfo";
import { AirConditionData } from "@/types";
import { View, Text } from "react-native";
import { styles } from "./style";

const AirConditionDetails = () => {
  const airConditionData: AirConditionData[] = [
    {
      title: "UV INDEX",
      value: "3",
    },
    {
      title: "WIND",
      value: "0.2 km/h",
    },
    {
      title: "HUMIDITY",
      value: "56%",
    },
    {
      title: "VISIBILITY",
      value: "12 km",
    },
    {
      title: "FEELS LIKE",
      value: "30°",
    },
    {
      title: "CHANCE OF RAIN",
      value: "0%",
    },
    {
      title: "PRESSURE",
      value: "1008 hPa",
    },
    {
      title: "SUNSET",
      value: "20:58",
    },
  ];
  return (
    <Container scroll>
      <TopInfo />
      <View style={styles.airconditionsRow}>
        {airConditionData.map((aircondition, index) => (
          <View key={`air-condition-detail-${index}`} style={styles.singleAircondition}>
            <Text style={styles.singleAirconditionTitle}>{aircondition.title}</Text>
            <Text style={styles.singleAirconditionValue}>{aircondition.value}</Text>
          </View>
        ))}
      </View>
    </Container>
  );
};

export default AirConditionDetails;
