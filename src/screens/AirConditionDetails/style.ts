import { secondary_color, secondary_text_color } from "@/constants/colors";
import { borderRadiusVal } from "@/constants/commonstyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  airconditionsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 80,
    paddingBottom: 50,
  },
  singleAircondition: {
    width: "48%",
    height: 100,
    marginBottom: 15,
    borderRadius: borderRadiusVal,
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    paddingHorizontal: 20,
    backgroundColor: secondary_color,
  },
  singleAirconditionTitle: {
    color: secondary_text_color,
    // fontSize: 14,
    fontWeight: "bold",
  },
  singleAirconditionValue: { color: "white", fontSize: 22, fontWeight: "bold" },
});
