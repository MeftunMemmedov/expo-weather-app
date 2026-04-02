import { View, Text, StyleSheet } from "react-native";

const ErrorMessage = () => {
  return (
    <View style={styles.errorMessageContainer}>
      <Text style={styles.errorMessageText}>
        An error occured. Please try again.
      </Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  errorMessageContainer: {
    paddingVertical: 200,
  },
  errorMessageText: {
    textAlign: "center",
    color: "red",
  },
});
