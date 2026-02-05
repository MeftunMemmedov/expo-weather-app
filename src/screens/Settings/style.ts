import {
  primary_color,
  primary_text_color,
  secondary_color,
  secondary_text_color,
} from "@/constants/colors";
import { borderRadiusVal, screenTitleSize } from "@/constants/commonstyles";
import { StyleSheet } from "react-native";

export const settingStyles = StyleSheet.create({
  screenTitle: {
    fontSize: screenTitleSize,
    color: "white",
    paddingTop: 40,
    fontWeight: "bold",
    marginBottom: 30,
  },
  unitText: {
    color: primary_text_color,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  allsettingsContainer: {
    backgroundColor: secondary_color,
    borderRadius: borderRadiusVal,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  settingsContainer: {
    height: 100,
    marginBottom: 5,
  },
  settingsTitle: {
    color: secondary_text_color,
    fontWeight: "bold",
    marginBottom: 10,
  },
  settingsSwitchBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: primary_color,
    borderRadius: 15,
  },
  settingsSwitchBtn: {
    flex: 1,
    paddingVertical: 2,
    borderRadius: 8,
  },
  settingsSwitchBtnText: { textAlign: "center" },
  settingsSwitchBtnSplitterLine: {
    flex: 0.006,
    height: "100%",
    backgroundColor: secondary_color,
  },
  // othersettings
  otherSettingsContainer: {
    marginBottom: 40,
  },
  otherSettingsTitle: {
    color: primary_text_color,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  otherSettingsInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  otherSettingsBox: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: secondary_color,
    borderRadius: borderRadiusVal,
  },
  innerBox: { flexDirection: "column", gap: 5 },
  otherSettingsInnerBoxTitle: {
    color: primary_text_color,
    fontSize: 19,
    fontWeight: "bold",
  },
  otherSettingsInnerBoxSubtitle: { color: secondary_text_color, fontSize: 16 },
  otherSettingsSwitch: { borderWidth: 1, borderColor: "white" },
});
