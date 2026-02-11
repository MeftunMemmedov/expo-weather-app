import { secondary_text_color } from "@/constants/colors";
import { getFixedTemp } from "@/helpers/common";
import { useSettings } from "@/hooks";
import { useAppSelector } from "@/store/hooks";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const TopInfo = () => {
  const { getSetting } = useSettings();
  const tempSetting = getSetting("TEMPRATURE");

  const { currentWeather: current } = useAppSelector((store) => store.weather);

  if (current == null) return null;
  return (
    <View style={styles.topSection}>
      <View style={styles.topInfoTextBox}>
        <Text style={styles.countryName}>{current.location.name}</Text>
        <Text style={styles.chanceOfRainText}>
          {current.current.condition.text}
        </Text>
      </View>
      <View style={styles.weatherIconBox}>
        <Image
          source={{ uri: `https:${current.current.condition.icon}` }}
          style={styles.weatherIcon}
        />
      </View>
      <Text style={styles.weatherDegree}>
        {tempSetting?.selected === "Celsius"
          ? getFixedTemp(current.current.temp_c)
          : getFixedTemp(current.current.temp_f)}
      </Text>
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
  weatherIcon: {
    width: "100%",
    height: "100%",
    aspectRatio: "16/10",
    objectFit: "contain",
  },
  weatherDegree: {
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
  },
});
