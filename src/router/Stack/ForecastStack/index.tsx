import AirConditionDetails from "@/screens/AirConditionDetails";
import Forecast from "@/screens/Forecast";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { primary_color, primary_text_color } from "@/constants/colors";

const Stack = createNativeStackNavigator();

const ForecastStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Forecast"
        component={Forecast}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AirConditions"
        component={AirConditionDetails}
        options={({ navigation }) => ({
          header: () => (
            <View style={styles.airConditionsHeaderContainer}>
              <View style={styles.airConditionsHeaderBackBtnBox}>
                <Pressable onPress={() => navigation.goBack()} style={styles.airConditionsHeaderBackBtn}>
                  <Entypo name="chevron-left" size={30} color="white" />
                </Pressable>
              </View>
              <View style={styles.airConditionsHeaderPageTitleBox}>
                <Text style={styles.airConditionsHeaderPageTitle}>
                  Air Conditions
                </Text>
              </View>
              {/* <View v></View> */}
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
export default ForecastStackNavigator;

const styles = StyleSheet.create({
  airConditionsHeaderContainer: {
    height: 90,
    backgroundColor: primary_color,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingBottom:15
  },
  airConditionsHeaderBackBtnBox: {
    width: "20%",
  },
  airConditionsHeaderBackBtn:{
    // borderWidth:1
  },
  airConditionsHeaderPageTitleBox: { width: "60%" },
  airConditionsHeaderPageTitle: {
    color: primary_text_color,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
