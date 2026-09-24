import { StyleSheet } from "react-native";

export const chooseLocationByStyles = StyleSheet.create({
  mainContainer: {},
  btnContainer: {
    margin: "auto",
  },
  btn: {
    backgroundColor: "white",
    width: 280,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap:10
  },
  btnText: {
    fontWeight: "600",
    textAlign: "center",
  },
});
