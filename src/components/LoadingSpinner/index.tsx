import { View, Text, ActivityIndicator, Dimensions } from "react-native";
import React from "react";
import { primary_color, primary_text_color } from "@/constants/colors";
import { loadingSpinnerStyles } from "./styles";

const LoadingSpinnner = () => {
  const { height } = Dimensions.get("screen");
  return (
    <View
      style={[
        { height, backgroundColor: primary_color },
        loadingSpinnerStyles.mainContainer,
      ]}
    >
      <ActivityIndicator size={100} color={primary_text_color} />
    </View>
  );
};

export default LoadingSpinnner;
