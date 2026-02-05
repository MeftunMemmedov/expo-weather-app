import { secondary_text_color } from "@/constants/colors";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const TopInfo = () => {
  return (
    <View style={styles.topSection}>
      <View style={styles.topInfoTextBox}>
        <Text style={styles.countryName}>Madrid</Text>
        <Text style={styles.chanceOfRainText}>Chance of rain: 0%</Text>
      </View>
      <View style={styles.weatherIconBox}>
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
      <Text style={styles.weatherDegree}>31°</Text>
    </View>
  );
};

export default TopInfo;

const { width } = Dimensions.get("screen");
const isTablet = width >= 768;

const styles = StyleSheet.create({
  // topsection
  topSection: {
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
    paddingTop: 30,
  },
  topInfoTextBox: {
    flexDirection: "column",
    alignItems: "center",
  },
  countryName: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  chanceOfRainText: {
    fontSize: 20,
    color: secondary_text_color,
  },
  weatherIconBox: {
    aspectRatio: "16/10",
    width: isTablet ? "60%" : "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  weatherDegree: {
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
  },
});
