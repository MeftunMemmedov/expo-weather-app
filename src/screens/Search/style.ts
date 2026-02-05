import {
  primary_text_color,
  secondary_color,
  secondary_text_color,
} from "@/constants/colors";
import { borderRadiusVal } from "@/constants/commonstyles";
import { StyleSheet } from "react-native";

export const searchStyles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    // borderWidth: 1,
    // borderColor: "white",
  },
  searchInput: {
    backgroundColor: secondary_color,
    width: "80%",
    borderRadius: 10,
    height: 45,
    paddingHorizontal: 10,
  },
  cancelSearchBtn: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelSearchBtnText: { color: "white", fontWeight: "bold" },
  //   results
  searchResultList: {
    flexDirection: "column",
    gap: 20,
    paddingVertical: 40,
  },
  singleSearchResult: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: borderRadiusVal,
    backgroundColor: secondary_color,
  },
  singleResultWeatherIcon: {
    width: 50,
    height: 50,
    aspectRatio: "1/1",
    objectFit: "contain",
  },
  singleResultInfoBox: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
  },
  singleResultInfos: {},
  singleResultInfoCityname: {
    fontSize: 18,
    color: primary_text_color,
    fontWeight: "bold",
    marginBottom: 5,
  },
  singleResultInfoTime: {
    color: secondary_text_color,
    fontSize: 12,
    fontWeight: "bold",
  },
  singleResultInfoTemp: { color: "white", fontSize: 35, marginTop: -5 },
});
