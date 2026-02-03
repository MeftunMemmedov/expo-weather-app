import { View, Text, Image } from "react-native";
import { forecastStyles } from "../../style";

const TopInfo = () => {
  return (
    <View style={forecastStyles.topSection}>
      <View style={forecastStyles.topInfoTextBox}>
        <Text style={forecastStyles.countryName}>Madrid</Text>
        <Text style={forecastStyles.chanceOfRainText}>Chance of rain: 0%</Text>
      </View>
      <View style={forecastStyles.weatherIconBox}>
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
      <Text style={forecastStyles.weatherDegree}>31°</Text>
    </View>
  );
};

export default TopInfo;
