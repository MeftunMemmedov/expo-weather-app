import { View, Text } from "react-native";
import { errorMessageStyles } from "./styles";

const ErrorMessage = () => {
  return (
    <View style={errorMessageStyles.errorMessageContainer}>
      <Text style={errorMessageStyles.errorMessageText}>
        An error occured. Please try again.
      </Text>
    </View>
  );
};

export default ErrorMessage;
