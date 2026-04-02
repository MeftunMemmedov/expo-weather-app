import { View, Text, ActivityIndicator, Dimensions } from "react-native";
import React from "react";
import { primary_color, primary_text_color } from "@/constants/colors";

const LoadingSpinnner = () => {
  const { height } = Dimensions.get("screen");
  return (
    <View
      style={{
        height,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: primary_color,
      }}
    >
      <ActivityIndicator size={100} color={primary_text_color} />
    </View>
  );
};

export default LoadingSpinnner;
