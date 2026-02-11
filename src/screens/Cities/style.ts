import { secondary_color, secondary_text_color } from "@/constants/colors";
import { borderRadiusVal, screenTitleSize } from "@/constants/commonstyles";
import { StyleSheet } from "react-native";

export const citiesStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    gap: 30,
    paddingTop: 40,
  },
  screenTitle: {
    color: "white",
    fontSize: screenTitleSize,
    fontWeight: "bold",
    // marginBottom
  },
  searchInputBtn: {
    backgroundColor: secondary_color,
    height: 60,
    width: "100%",
    paddingHorizontal: 15,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInputBtnText: {
    color: "white",
    fontSize: 16,
  },
  singleCityItem: {
    height: 100,
    borderRadius: borderRadiusVal,
    backgroundColor: secondary_color,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  singleCityHiddenBg: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
  },
  singleCityHiddenBgBtn: {
    height: 100,
    paddingHorizontal: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: borderRadiusVal,
  },
  singleCityLeftSide: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
  },
  singleCityName: { color: "white", fontSize: 25, fontWeight: "bold" },
  singleCityTime: { color: secondary_text_color },
  singleCityTemp: { color: "white", fontSize: 50 },
});
